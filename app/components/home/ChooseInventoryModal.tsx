"use client";

import Link from "next/link";
import { Modal, Typography } from "../common";
import { FiBox, FiVideo } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface IChooseInventoryModal {
    isOpen: boolean;
    onClose: () => void;
    onSelect?: (type: "inventory" | "video") => void;
}

export const ChooseInventoryModal = ({ isOpen, onClose, onSelect }: IChooseInventoryModal) => {
    const t = useTranslations("common.booking.modals.chooseInventory");
    
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
                    {t("title")}
                </Typography>
                <Typography className="!text-navy  mt-4 ">
                    {t("description")}
                </Typography>

                <div className="flex flex-col gap-6 mt-12 w-full">
                    <Link href="/booking" 
                        onClick={() => onSelect?.("inventory")}
                        className="cursor-pointer flex items-center justify-center gap-4 bg-primary-light-100 hover:bg-primary-light-200 transition-all rounded-[6px] py-4 w-full group"
                    >
                        <FiBox size={20} className="text-navy group-hover:scale-110 transition-transform" />
                        <Typography className="!text-navy ">{t("inventory")}</Typography>
                    </Link>

                    <Link href="/booking/upload-video" 
                        onClick={() => onSelect?.("video")}
                        className="cursor-pointer flex items-center justify-center gap-4 bg-primary-light-100 hover:bg-primary-light-200 transition-all rounded-[6px] py-4 w-full group"
                    >
                        <FiVideo size={20} className="text-navy group-hover:scale-110 transition-transform" />
                        <Typography className="!text-navy ">{t("uploadVideos")}</Typography>
                    </Link>
                </div>
            </div>
        </Modal>
    )
}
