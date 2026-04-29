"use client";

import { Modal, Typography } from "../common";
import { FiBox, FiVideo } from "react-icons/fi";

interface IChooseInventoryModal {
    isOpen: boolean;
    onClose: () => void;
    onSelect?: (type: "inventory" | "video") => void;
}

export const ChooseInventoryModal = ({ isOpen, onClose, onSelect }: IChooseInventoryModal) => {
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
                    Choose Inventory or upload videos
                </Typography>
                <Typography className="!text-navy  mt-4 ">
                    You can choose between setup inventory manually or just upload videos and proceed
                </Typography>

                <div className="flex flex-col gap-6 mt-12 w-full">
                    <div 
                        onClick={() => onSelect?.("inventory")}
                        className="cursor-pointer flex items-center justify-center gap-4 bg-primary-light-100 hover:bg-primary-light-200 transition-all rounded-[6px] py-4 w-full group"
                    >
                        <FiBox size={20} className="text-navy group-hover:scale-110 transition-transform" />
                        <Typography className="!text-navy ">Inventory</Typography>
                    </div>

                    <div 
                        onClick={() => onSelect?.("video")}
                        className="cursor-pointer flex items-center justify-center gap-4 bg-primary-light-100 hover:bg-primary-light-200 transition-all rounded-[6px] py-4 w-full group"
                    >
                        <FiVideo size={20} className="text-navy group-hover:scale-110 transition-transform" />
                        <Typography className="!text-navy ">Upload videos</Typography>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
