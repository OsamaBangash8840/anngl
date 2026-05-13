'use client';
import { Button, Tabs, TextField, Typography, SelectField, DateField } from "../common";
import { IoChevronForward } from "react-icons/io5";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CollapsibleCard } from "../common/CollapsibleCard";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { CustomModal } from "./CustomModal";


const listItems =[
    "Sofa and Couches",
    "Table and Chairs",
    "Bed and Mattress",
    "Drawers",
    "Wardrobes",
    "Appliances",
    "Others",
]


const InventoryItem = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex  justify-between items-center p-5  rounded-sm bg-[#E2E9EB] border border-[#C8D5D9] shadow-sm hover:shadow-md transition-shadow">
      <div>
      <Typography variant="bodyMedium" className="!text-navy !font-bold !text-[#112A35] ">{title}</Typography>
      <Typography variant="bodySmall" className="!text-[#112A35] mt-2 ">Size 2’ x 2’</Typography>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image src="/images/inventoryIcon.svg" alt={title} width={50} height={50} className="mt-5" />
         <div className="flex items-center gap-4 px-3 py-1">
        <button onClick={decrement} className=" rounded-full w-6 h-6 flex items-center justify-center text-gray border border-gray font-bold text-lg hover:text-navy transition-colors">-</button>
        <Typography variant="bodyMediumBold" className="!text-navy">{count}</Typography>
        <button onClick={increment} className=" bg-[#112A35] rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-lg hover:text-navy transition-colors">+</button>
      </div>
      </div>
    </div>
  );
};

const AddCustomItem = ({ onAdd }: { onAdd: () => void }) => {
    return (
        <div onClick={onAdd} className="bg-primary-light-100 border border-primary-light-200 rounded-sm p-5 flex flex-col  justify-center h-full cursor-pointer  transition-all">
            <Typography variant="bodyMedium" className="!text-[#112A35] font-medium ">Couldn’t find your furniture?</Typography>
            <Typography variant="h3" className="!text-primary mt-2">Add item +</Typography>
        </div>
    )
}

const TabContent = ({ onAdd }: { onAdd: () => void }) => (
  <div className="mt-6">
    <div className="grid grid-cols-4 gap-8 mb-8">
      <SelectField />
      <SelectField />
      <SelectField />
      <SelectField />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {listItems.slice(0, 5).map((item, index) => (
        <InventoryItem key={index} title={item} />
      ))}
      <AddCustomItem onAdd={onAdd} />
    </div>
  </div>
);

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
                <CollapsibleCard defaultOpen={true} title="Bedroom Items" count={7} icon={<Image src={'/images/bookingIcon.svg'} alt="" width={24} height={24}/>}>
                    {listItems.map((item, index) => (
                        <li key={index} className="py-1 px-3 list-none">
                            <Typography className="!text-navy">{item}</Typography>
                        </li>
                    ))}
                </CollapsibleCard>
                <CollapsibleCard title="Bed Room" count={0} icon={<Image src={'/images/bookingIcon.svg'} alt="" width={24} height={24}/>}>
                    {listItems.map((item, index) => (
                        <li key={index} className="py-1 px-3 list-none">
                            <Typography className="!text-navy">{item}</Typography>
                        </li>
                    ))}
                </CollapsibleCard>
                <CollapsibleCard title="Dining Room" count={0} icon={<Image src={'/images/bookingIcon.svg'} alt="" width={24} height={24}/>}>
                    {listItems.map((item, index) => (
                        <li key={index} className="py-1 px-3 list-none">
                            <Typography className="!text-navy">{item}</Typography>
                        </li>
                    ))}
                </CollapsibleCard> 
                <CollapsibleCard title="Storage Room" count={0} icon={<Image src={'/images/bookingIcon.svg'} alt="" width={24} height={24}/>}>
                    {listItems.map((item, index) => (
                        <li key={index} className="py-1 px-3 list-none">
                            <Typography className="!text-navy">{item}</Typography>
                        </li>
                    ))}
                </CollapsibleCard>
                <CollapsibleCard title="Office" count={0} icon={<Image src={'/images/bookingIcon.svg'} alt="" width={24} height={24}/>}>
                    {listItems.map((item, index) => (
                        <li key={index} className="py-1 px-3 list-none">
                            <Typography className="!text-navy">{item}</Typography>
                        </li>
                    ))}
                </CollapsibleCard>
            </div>
            <div className="mt-8 w-3/4">
                <Typography variant="bodyLarge" className="!bg-[#112A35] text-center !px-2 !py-3 !rounded-sm">My Rooms</Typography>
          <Tabs
            variant="underline"
            className="mt-6"
            items={[
              {
                title: "Living Room 1",
                content: <TabContent onAdd={() => setIsModalOpen(true)} />
              },
              {
                title: "Living Room 2",
                content: <TabContent onAdd={() => setIsModalOpen(true)} />
              },
              {
                title: "Living Room 3",
                content: <TabContent onAdd={() => setIsModalOpen(true)} />
              },
              {
                title: "Living Room 4",
                content: <TabContent onAdd={() => setIsModalOpen(true)} />
              }
            ]}
          />
            </div>
        </div>
 <CustomModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
        </>
    )
}