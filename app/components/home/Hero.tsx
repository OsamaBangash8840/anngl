'use client'
import { Button, Typography, Tabs, TextField, SelectField, DateField } from "../common";
import { CiLocationOn } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { ChooseInventoryModal } from "./ChooseInventoryModal";
import { useTranslations } from "next-intl";


export const Hero = () => {
    const t = useTranslations('common.hero');
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
        backgroundImage: "url(/images/hero-bg.gif)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container pt-40 pb-10 flex flex-col md:flex-row justify-center items-center md:gap-20">
        <div className="mt-8 sm:mt-0 flex-1">
            <Typography variant="bodyMedium">
                {t('platform')}
            </Typography>
            <Typography variant="hDisplay">
                {t('title')} <span className="text-primary font-homemade-apple">{t('titleAccent')}</span>
            </Typography>
            <Button
              title={t('comparePrices')}
              variant="white"
              className="mt-16"
              onClick={() => setIsModalOpen(true)}
            />
        </div>
        <div className="bg-primary/20 rounded-[6px] px-4 py-2 md:px-8 md:py-10 mb-8  mt-16 border border-primary w-full flex-1">
         <Typography variant="bodyMedium">
                {t('description')}
            </Typography>
             <div className="mt-8 ">
              <Tabs 
                items={[
                  { title: t('tabs.furniture'), icon: <Image src={'/images/furniture.svg'} alt="location icon" width={31} height={26} /> ,
                  content: <div className="flex flex-col gap-3">
                             <TextField label={t('form.movingFrom')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <TextField label={t('form.movingTo')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label={t('form.propertyType')} placeholder={t('form.chooseOne')} />
                              <SelectField label={t('form.roomType')} placeholder={t('form.chooseOne')} /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label={t('form.movingDate')} className="!text-teal !text-sm" placeholder={t('form.chooseDate')} />
                                <Button title={t('form.findBestPrice')} onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
                             </div>
                         </div> 
                   },
                  { title: t('tabs.goods'), icon: <Image src={'/images/goods.svg'} alt="location icon" width={31} height={26} />, content:<div className="flex flex-col gap-3">
                             <TextField label={t('form.movingFrom')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <TextField label={t('form.movingTo')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label={t('form.propertyType')} placeholder={t('form.chooseOne')} />
                              <SelectField label={t('form.roomType')} placeholder={t('form.chooseOne')} /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label={t('form.movingDate')} className="!text-teal !text-sm" placeholder={t('form.chooseDate')} />
                                <Button title={t('form.findBestPrice')} onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
                             </div>
                         </div> },
                  { title: t('tabs.refrigerator'), icon: <Image src={'/images/refrigerator.svg'} alt="location icon" width={31} height={26} />, content: <div className="flex flex-col gap-3">
                             <TextField label={t('form.movingFrom')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <TextField label={t('form.movingTo')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label={t('form.propertyType')} placeholder={t('form.chooseOne')} />
                              <SelectField label={t('form.roomType')} placeholder={t('form.chooseOne')} /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label={t('form.movingDate')} className="!text-teal !text-sm" placeholder={t('form.chooseDate')} />
                                <Button title={t('form.findBestPrice')} onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
                             </div>
                         </div>  },
                  { title: t('tabs.largeItems'), icon: <Image src={'/images/largeItems.svg'} alt="location icon" width={31} height={26} />, content: <div className="flex flex-col gap-3">
                             <TextField label={t('form.movingFrom')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <TextField label={t('form.movingTo')} placeholder={t('form.placeholder')} icon={<CiLocationOn />} />
                             <div className="flex justify-center items-center gap-2">
                              <SelectField label={t('form.propertyType')} placeholder={t('form.chooseOne')} />
                              <SelectField label={t('form.roomType')} placeholder={t('form.chooseOne')} /> 
                             </div>
                             <div className="flex flex-col gap-2">
                                <DateField label={t('form.movingDate')} className="!text-teal !text-sm" placeholder={t('form.chooseDate')} />
                                <Button title={t('form.findBestPrice')} onClick={() => setIsModalOpen(true)} className="mt-2" variant="default" icon={<FaRegArrowAltCircleRight />} />
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
