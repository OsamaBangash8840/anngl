"use client";

import { IoChevronForward } from "react-icons/io5"
import { Button, SelectField, TextField, Typography } from "../common"
import Image from "next/image"
import { CiLocationOn } from "react-icons/ci"
import { useState } from "react"

export const Location = () => {
    const services = [
  "Packing",
  "Wrapping",
  "Kitchen assemble",
  "Bedroom assemble",
  "Air condition installation",
  "Unpacking",
  "Order boxes",
  "Kitchen disassemble",
  "Bedroom disassemble",
  "Air condition removal",
];
    const [showExtraPickup, setShowExtraPickup] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const handleCheckboxChange = (service: string) => {
    if (selectedServices.includes(service)) {
      // Remove if already selected
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      // Add if not selected
      setSelectedServices([...selectedServices, service]);
    }
  };
    return (
        <>
            <div className=" flex justify-between items-center">
                <div>
                    <Typography variant="h3" className="!text-navy">Move details</Typography>
                    <div className=" flex items-center gap-1">
                        <Typography className="!text-navy max-w-[550px]">Verify your location info below. Prices are right around the corner! </Typography>
                        <Image src="/images/exclmationIcon.svg" alt=" Icon" width={20} height={20}/>
                    </div>
                </div>
                <Button title="Continue" variant="default" className="!rounded-[6px]" icon={<IoChevronForward className="text-white" />}/>
            </div>
            <div>
                 <div className=" gap-8">

              {/* 1. Moving From */}
              <div className="space-y-4">
                <Typography variant="bodyLarge" className="!text-navy mt-8">Moving from</Typography>
                <div className="flex items-center gap-4">
                <TextField placeholder="Moving from address, city, or Zip" icon={<CiLocationOn />} />
                <TextField placeholder="Apartment"  />
                </div>
                <div className="flex items-center gap-4">
                  <TextField placeholder="Floor" />
                  <SelectField placeholder="Elevator i.e yes or now"/>
                </div>
              </div>
             <div className="flex items-center gap-3">
  <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={showExtraPickup}
      onChange={(e) => setShowExtraPickup(e.target.checked)}
    />
    <div className="absolute inset-0 rounded-full bg-gray peer-checked:bg-primary transition-colors duration-200" />
    <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
  </label>

  <Typography className="!text-navy mt-5">
    Additional pick up stop
  </Typography>
</div>
              
               {/* 2 Extra Pickup */}
              {
                showExtraPickup && (
                    <>
                  <div className="space-y-4">
                <Typography variant="bodyLarge" className="!text-navy mt-8">Extra Pick-up</Typography>
                <div className="flex items-center gap-4">
                <TextField placeholder="Moving from address, city, or Zip" icon={<CiLocationOn />} />
                <TextField placeholder="Apartment"  />
                </div>
                <div className="flex items-center gap-4">
                  <TextField placeholder="Floor" />
                  <SelectField placeholder="Elevator i.e yes or now" variant="location"/>
                </div>
              </div>
              <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="absolute inset-0 rounded-full  bg-gray peer-checked:bg-primary transition-colors duration-200" />
                      <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
                  </label>
                    <Typography className="!text-navy mt-5">Additional pick up stop</Typography>
              </div> 
              </>
              )}
              
              
                {/* 3 Moving To */}
              <div className="space-y-4">
                <Typography variant="bodyLarge" className="!text-navy mt-8">Moving to</Typography>
                <div className="flex items-center gap-4">
                <TextField placeholder="Moving from address, city, or Zip" icon={<CiLocationOn />} />
                <TextField placeholder="Apartment"  />
                </div>
                <div className="flex items-center gap-4">
                  <TextField placeholder="Floor" />
                  <SelectField placeholder="Elevator i.e yes or now"/>
                </div>
              </div>
              <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="absolute inset-0 rounded-full  bg-gray peer-checked:bg-primary transition-colors duration-200" />
                      <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
                  </label>
                    <Typography className="!text-navy mt-5">Additional pick up stop</Typography>
              </div>

      <div>
  <Typography variant="bodyLarge" className="!text-navy mb-4 mt-8">
    Services
  </Typography>

 <div className="grid grid-cols-2 gap-y-4">
  {services.map((service, index) => (
    <label key={index} className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={selectedServices.includes(service)}
        onChange={() => handleCheckboxChange(service)}
        className="peer hidden"
      />
      {/* Checkbox box — direct sibling of peer input */}
      <div className="w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition">
        {/* Controlled via JS instead of peer-checked */}
        <svg
          className={`w-3 h-3 text-white transition ${selectedServices.includes(service) ? "opacity-100" : "opacity-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-navy text-[16px]">{service}</span>
    </label>
  ))}
</div>
</div>
           
          </div>

            </div>
        </>
    )
}