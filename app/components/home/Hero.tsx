'use client'
import { Button, Typography, Tabs, TextField, SelectField, DateField } from "../common";
import { CiLocationOn } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { ChooseInventoryModal } from "./ChooseInventoryModal";


export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelect = (type: "inventory" | "video") => {
        console.log("User selected:", type);
        // Add navigation or further logic here
        setIsModalOpen(false);
    }

  return (
    <section
      className=" md:h-[800px]"
      style={{
        backgroundImage: "url(/images/hero-bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container pt-40 pb-10 flex flex-col md:flex-row justify-center items-center md:gap-20">
        <div className="mt-8 sm:mt-0 flex-1">
            <Typography variant="bodyMedium">
                Saudi Arabia's #1 Moving Platform
            </Typography>
            <Typography variant="hDisplay">
                Effortless moving services at your <span className="text-primary font-homemade-apple">fingertips</span>
            </Typography>
            <Button
              title="Compare Prices"
              variant="white"
              className="mt-16"
              onClick={() => setIsModalOpen(true)}
            />
        </div>
        <div className="bg-primary/20 rounded-[6px] px-4 py-2 md:px-8 md:py-10 mb-8  mt-16 border border-primary w-full flex-1">
         <Typography variant="bodyMedium">
                Compare guaranteed moving quotes from the best moving companies.
            </Typography>
             <div className="mt-8 ">
              <Tabs 
                items={[
                  { title: "Furniture", icon: <Image src={'/images/furniture.svg'} alt="location icon" width={31} height={26} /> ,
                  content: <div className="flex flex-col gap-3">
                             <TextField label="Moving From*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <TextField label="Moving To*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label="Property Type" placeholder="Choose One" />
                              <SelectField label="Room Type" placeholder="Choose One" /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label="Moving Date" className="!text-teal !text-sm" placeholder="Choose Date" />
                                <Button title="Find Best Price" onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
                             </div>
                         </div> 
                  },
                  { title: "Goods", icon: <Image src={'/images/goods.svg'} alt="location icon" width={31} height={26} />, content:<div className="flex flex-col gap-3">
                             <TextField label="Moving From*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <TextField label="Moving To*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label="Property Type" placeholder="Choose One" />
                              <SelectField label="Room Type" placeholder="Choose One" /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label="Moving Date" className="!text-teal !text-sm" placeholder="Choose Date" />
                                <Button title="Find Best Price" onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
                             </div>
                         </div> },
                  { title: "Refrigerator", icon: <Image src={'/images/refrigerator.svg'} alt="location icon" width={31} height={26} />, content: <div className="flex flex-col gap-3">
                             <TextField label="Moving From*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <TextField label="Moving To*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label="Property Type" placeholder="Choose One" />
                              <SelectField label="Room Type" placeholder="Choose One" /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label="Moving Date" className="!text-teal !text-sm" placeholder="Choose Date" />
                                <Button title="Find Best Price" onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
                             </div>
                         </div>  },
                  { title: "Large Items", icon: <Image src={'/images/largeItems.svg'} alt="location icon" width={31} height={26} />, content: <div className="flex flex-col gap-3">
                             <TextField label="Moving From*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <TextField label="Moving To*" placeholder="Address, City or Zip" icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label="Property Type" placeholder="Choose One" />
                              <SelectField label="Room Type" placeholder="Choose One" /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label="Moving Date" className="!text-teal !text-sm" placeholder="Choose Date" />
                                <Button title="Find Best Price" onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
                             </div>
                         </div>  }
                ]}
                className="w-full"
              />

            </div>
        </div>
      </div>

      <ChooseInventoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={handleSelect}
      />
    </section>
  );
};
