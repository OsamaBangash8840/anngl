"use client";

import { Button, Modal, TextField, Typography } from "../common";
import { FaUpload } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";


interface IChooseInventoryModal {
    isOpen: boolean;
    onClose: () => void;
    onSelect?: (type: "inventory" | "video") => void;
}

export const CustomModal = ({ isOpen, onClose, onSelect }: IChooseInventoryModal) => {
    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            title="" 
            className="!max-w-[660px] !rounded-[6px]"
            paddingClass="p-8"
        >
            <div className="flex flex-col items-center text-center">
                <Typography variant="bodyLarge" className="!text-navy !text-[18px] ">
                    Add Custom Item
                </Typography>
                <Typography className="!text-navy  mt-4 ">
                    Please add items from the catalog on the left unless the custom items are really unique.
                </Typography>
                <div className="relative mt-8 w-full flex flex-col items-center justify-center rounded-[6px] py-10 cursor-pointer group">
                    <FaUpload className="text-gray text-[33px] mb-3 group-hover:scale-110 transition-transform" />
                    <Typography variant="bodySmall" className="!text-gray ">Click to upload an image</Typography>
                    <input 
                        type="file" 
                        accept="image/*" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    />
                </div>

            </div>
            <div className="px-3">
                <div className="flex flex-col gap-y-1 mt-4">
                    <Typography className="!text-navy  text-start">
                        Have a unique item? Fill in the details below to add it.
                    </Typography>
                </div>
                <TextField  placeholder="Name of Item" className="mt-2" icon={<IoPersonOutline />} />
                <div className="grid grid-cols-3 gap-3 mt-5">
                    <TextField placeholder="Width in inches"  />
                    <TextField placeholder="Height in inches" />
                    <TextField placeholder="Depth in inches" />
                </div>
                
            <Button title="Add Item" className="mt-5 w-full" onClick={onClose} variant="default"  />
            </div>
                
        </Modal>
    )
}
