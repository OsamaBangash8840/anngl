"use client";
import { useState } from "react";
import { Typography } from "../common"
import Image from "next/image";


const InventoryItem = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex  md:w-1/3  justify-between items-center p-5  rounded-sm bg-[#E2E9EB] border border-[#C8D5D9] shadow-sm hover:shadow-md transition-shadow mt-3">
      <div>
      <Typography variant="bodyMedium" className="!text-navy !font-bold !text-[#112A35] ">{title}</Typography>
      <Typography variant="bodySmall" className="!text-[#112A35] mt-2 ">Carton</Typography>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image src="/images/boxImage.svg" alt={title} width={50} height={50} className="mt-5" />
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
        <div onClick={onAdd} className="bg-primary-light-100 md:w-1/3 border border-primary-light-200 rounded-sm p-7 flex flex-col mt-3 justify-center h-full cursor-pointer  transition-all">
            <Typography variant="bodyMedium" className="!text-[#112A35] font-medium ">Couldn’t find your furniture?</Typography>
            <Typography variant="h3" className="!text-primary mt-2">Add item +</Typography>
        </div>
    )
}

export const AdditionalCarton = () => {
    return (
        <div>
            <Typography variant="bodyLarge" className="!bg-[#112A35] text-center !px-2 !py-3 !rounded-sm">Small Carton</Typography>
            <InventoryItem title="Additional Carton"  />
            <Typography variant="bodyLarge" className="!bg-[#112A35] text-center !px-2 !py-3 !rounded-sm mt-4">Medium Carton</Typography>
            <AddCustomItem onAdd={() => {}} /> 
            <Typography variant="bodyLarge" className="!bg-[#112A35] text-center !px-2 !py-3 !rounded-sm mt-4">Large Carton</Typography>
            <AddCustomItem onAdd={() => {}} />

        </div>
    )
}