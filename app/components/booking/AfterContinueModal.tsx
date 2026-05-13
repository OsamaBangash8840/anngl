"use client";

import Image from "next/image";
import { Button, Modal, TextField, Typography } from "../common";
import { FaUpload } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";


interface IChooseInventoryModal {
    isOpen: boolean;
    onClose: () => void;
    onSelect?: (type: "inventory" | "video") => void;
}
const InventoryItem = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex  justify-between items-center p-5  rounded-sm bg-[#E2E9EB] border border-[#C8D5D9] shadow-sm hover:shadow-md transition-shadow">
      <div>
      <Typography variant="bodyMedium" className="!text-navy !font-bold !text-[#112A35] ">{title}</Typography>
      <Typography variant="bodySmall" className="!text-[#112A35] mt-2 ">Carton</Typography>
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


const AddCustomItem = ({ onAdd = () => {} }: { onAdd?: () => void }) => {
    return (
        <div onClick={onAdd} className="bg-primary-light-100 border border-primary-light-200 rounded-sm p-5 flex flex-col  justify-center h-full cursor-pointer  transition-all">
            <Typography variant="bodyMedium" className="!text-[#112A35] font-medium ">Couldn’t find your furniture?</Typography>
            <Typography variant="h3" className="!text-primary mt-2">Add item +</Typography>
        </div>
    )
}
export const AfterContinueModal = ({ isOpen, onClose, onSelect }: IChooseInventoryModal) => {
    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            title="" 
            className="!max-w-[900px] !rounded-[6px]"
            paddingClass="p-8"
        >
            <div className="flex flex-col items-center text-center">
                <Typography variant="bodyLarge" className="!text-navy !text-[18px] ">
                    Continue to location
                </Typography>
                <Typography className="!text-navy  mt-4 ">
                    Do you want to add additional cartons <span className="text-primary">Yes</span> or <span className="text-primary">No</span> thanks
                </Typography>
            </div>

      <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
                <Typography className="!text-navy mb-2" variant="bodyLarge">Small Carton</Typography>
                <InventoryItem title="Small Carton" />
            </div> 
             <div>
                <Typography className="!text-navy mb-2" variant="bodyLarge">Medium Carton</Typography>
                <AddCustomItem/>
                            </div>
             <div>
                <Typography className="!text-navy mb-2" variant="bodyLarge">Large Carton</Typography>
                <AddCustomItem/>
            </div>        
      </div>
                      <Button title="Continue" className="mt-10 w-full" onClick={onClose} variant="default"  />

        </Modal>
    )
}
