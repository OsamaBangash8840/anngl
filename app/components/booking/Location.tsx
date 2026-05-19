"use client";

import { IoChevronForward } from "react-icons/io5"
import { Button, SelectField, TextField, Typography } from "../common"
import Image from "next/image"
import { CiLocationOn } from "react-icons/ci"
import { useState } from "react"
import { useTranslations } from "next-intl"

export const Location = () => {
    const t = useTranslations("common.booking.location");
    const tCommon = useTranslations("common.booking");

    const servicesKeys = [
  "packing",
  "wrapping",
  "kitchenAssemble",
  "bedroomAssemble",
  "acInstallation",
  "unpacking",
  "orderBoxes",
  "kitchenDisassemble",
  "bedroomDisassemble",
  "acRemoval",
];
    const [showExtraPickup, setShowExtraPickup] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const handleCheckboxChange = (service: string) => {
    if (selectedServices.includes(service)) {
      // Remove if already selected
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      // Add if not selected
      setSelectedServices([...selectedServices, service]);
    }
  };
    return (
        <>
            <div className="  flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                    <Typography variant="h3" className="!text-navy">{t('title')}</Typography>
                    <div className=" flex items-center gap-1">
                        <Typography className="!text-navy md:max-w-[550px]">{t('subtitle')}</Typography>
                        <Image src="/images/exclmationIcon.svg" alt=" Icon" width={20} height={20}/>
                    </div>
                </div>
                <Button title={tCommon('continue')} variant="default" className="!rounded-[6px]  mt-5 md:mt-0 " icon={<IoChevronForward className="text-white" />}/>
            </div>
            <div>
                 <div className=" gap-8">

              {/* 1. Moving From */}
              <div className="space-y-4">
                <Typography variant="bodyLarge" className="!text-navy mt-8">{t('movingFrom')}</Typography>
                <div className="flex md:flex-row flex-col items-center gap-4">
                <TextField placeholder={t('placeholderAddress')} icon={<CiLocationOn />} />
                <TextField placeholder={t('placeholderApartment')}  />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <TextField placeholder={t('placeholderFloor')} />
                  <SelectField placeholder={t('placeholderElevator')}/>
                </div>
              </div>
             <div className="flex items-center gap-3">
  <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={showExtraPickup}
      onChange={(e) => setShowExtraPickup(e.target.checked)}
    />
    <div className="absolute inset-0 rounded-full bg-gray peer-checked:bg-primary transition-colors duration-200" />
    <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
  </label>

  <Typography className="!text-navy mt-5">
    {t('additionalStop')}
  </Typography>
</div>
              
               {/* 2 Extra Pickup */}
              {
                showExtraPickup && (
                    <>
                  <div className="space-y-4">
                <Typography variant="bodyLarge" className="!text-navy mt-8">{t('extraPickup')}</Typography>
                <div className="flex md:flex-row flex-col items-center gap-4">
                <TextField placeholder={t('placeholderAddress')} icon={<CiLocationOn />} />
                <TextField placeholder={t('placeholderApartment')}  />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <TextField placeholder={t('placeholderFloor')} />
                  <SelectField placeholder={t('placeholderElevator')} variant="location"/>
                </div>
              </div>
              <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="absolute inset-0 rounded-full  bg-gray peer-checked:bg-primary transition-colors duration-200" />
                      <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
                  </label>
                    <Typography className="!text-navy mt-5">{t('additionalStop')}</Typography>
              </div> 
              </>
              )}
              
              
                {/* 3 Moving To */}
              <div className="space-y-4">
                <Typography variant="bodyLarge" className="!text-navy mt-8">{t('movingTo')}</Typography>
                <div className="flex md:flex-row flex-col items-center gap-4">
                <TextField placeholder={t('placeholderAddress')} icon={<CiLocationOn />} />
                <TextField placeholder={t('placeholderApartment')}  />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <TextField placeholder={t('placeholderFloor')} />
                  <SelectField placeholder={t('placeholderElevator')}/>
                </div>
              </div>
              <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="absolute inset-0 rounded-full  bg-gray peer-checked:bg-primary transition-colors duration-200" />
                      <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
                  </label>
                    <Typography className="!text-navy mt-5">{t('additionalStop')}</Typography>
              </div>

      <div>
  <Typography variant="bodyLarge" className="!text-navy mb-4 mt-8">
    {t('services')}
  </Typography>

 <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-5">
  {servicesKeys.map((serviceKey, index) => (
    <label key={index} className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={selectedServices.includes(serviceKey)}
        onChange={() => handleCheckboxChange(serviceKey)}
        className="peer hidden"
      />
      {/* Checkbox box — direct sibling of peer input */}
      <div className={`w-5 h-5 flex-shrink-0 border border-gray-400 rounded-md flex items-center justify-center transition ${selectedServices.includes(serviceKey) ? "bg-primary border-primary" : "bg-transparent"}`}>
        {/* Controlled via JS instead of peer-checked */}
        <svg
          className={`w-3 h-3 flex-shrink-0 text-white transition ${selectedServices.includes(serviceKey) ? "opacity-100" : "opacity-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-navy text-[16px]">{t(`servicesList.${serviceKey}`)}</span>
    </label>
  ))}
</div>
</div>
           
          </div>

            </div>
        </>
    )
}