'use client';
import { Button, Tabs, TextField, Typography, SelectField, DateField } from "../common";
import { IoChevronForward } from "react-icons/io5";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CollapsibleCard } from "../common/CollapsibleCard";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";


const listItems =[
    "Sofa and Couches",
    "Table and Chairs",
    "Bed and Mattress",
    "Drawers",
    "Wardrobes",
    "Appliances",
    "Others",
]


export const MyInventory = () => {
  const t = useTranslations("common");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
        <>
        <div className=" flex justify-between items-center">
            <div>
                <Typography variant="h3" className="!text-navy">Manage inventory</Typography>
                <Typography className="!text-navy max-w-[550px]">Manage your inventory and we are the only service that gives you a guaranteed price based on the size of your inventory.</Typography>
            </div>
            <Button title="Continue" variant="default" className="!rounded-[6px]" icon={<IoChevronForward className="text-white" />}/>
        </div>
        <TextField variant="search" placeholder="Search for an items" className="mt-8" icon={<CiSearch />} />
        <div className="flex items-center items-start gap-6">
            <div className="mt-8 w-1/4 space-y-4">
                <CollapsibleCard title="Bedroom Items" count={7} icon={<Image src={'/images/bookingIcon.svg'} alt="" width={24} height={24}/>}>
                    {listItems.map((item, index) => (
                        <li key={index} className="py-1 px-3 list-none">
                            <Typography className="!text-navy">{item}</Typography>
                        </li>
                    ))}
                </CollapsibleCard>
            </div>
            <div className="mt-8 w-3/4">
                <Typography variant="bodyLarge" className="!bg-[#112A35] text-center !px-2 !py-3 !rounded-sm">My Rooms</Typography>
          {/* <Tabs
            variant="underline"
            items={[
              {
                title: "Living Room"
              
              },
            ]}
          /> */}
            </div>
        </div>

        </>
    )
}