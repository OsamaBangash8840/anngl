import Image from "next/image";
import { Button, DateField, SelectField, TextareaField, TextField, Typography } from "../common";
import { IoChevronForward } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";




export const PersonalInfo = () => {
    return (
        <>
             <div className=" flex justify-between items-center">
                <div>
                    <Typography variant="h3" className="!text-navy">Personal info</Typography>
                    <div className=" flex items-center gap-1">
                        <Typography className="!text-navy max-w-[600px] mt-2">Review and confirm your details below to ensure everything is accurate and ready to go.</Typography>
                    </div>
                </div>
                <Button title="Continue" variant="default" className="!rounded-[6px]" icon={<IoChevronForward className="text-white" />}/>
            </div>
              <div className="space-y-4">
                  <Typography variant="bodyLarge" className="!text-navy mt-8">Personal Info</Typography>
                  <div className="grid grid-cols-2 gap-4">
                      <TextField placeholder="Name" icon={<IoPersonOutline  size={20}/>} />
                      <TextField placeholder="Email" icon={<MdOutlineEmail size={20} />} />
                      <TextField placeholder="Phone" icon={<MdPhone size={20}/>} />
                  </div>
              </div>
                         <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
                <input
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="absolute inset-0 rounded-full bg-gray peer-checked:bg-primary transition-colors duration-200" />
                <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
              </label>
            
              <Typography className="!text-navy mt-5">
                Additional pick up stop
              </Typography>
            </div>
              <div className="space-y-4">
                  <Typography variant="bodyLarge" className="!text-navy mt-12">Details</Typography>
                  <div className="grid grid-cols-2 gap-4">
                    <DateField inputClassName="!text-navy !font-light" icon={<MdOutlineDateRange size={20}/>}/>
                    <SelectField variant="location"/>
                     <TextField placeholder="Moving from address, city, or Zip" icon={<CiLocationOn />} />
                  </div>
              </div>
              <div className="space-y-4">
                  <Typography variant="bodyLarge" className="!text-navy mt-12">Any Special Requests?</Typography>
                  <div className="">
                    <TextareaField placeholder="Request" icon={<CiLocationOn />} />
                     <label  className="flex items-center gap-3 cursor-pointer mt-8">
      <input
        type="checkbox"
      
        className="peer hidden"
      />
      {/* Checkbox box — direct sibling of peer input */}
      <div className="w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition">
        {/* Controlled via JS instead of peer-checked */}
        <svg
          className={`w-3 h-3 text-white transition ${true ? "opacity-100" : "opacity-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-navy text-[13px]">I have read, understand and accept the Terms and Conditions</span>
    </label>
                  </div>
              </div>
        </>
    );
};  