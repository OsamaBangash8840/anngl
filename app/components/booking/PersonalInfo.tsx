'use client'
import { useState } from "react";
import { Button, DateField, SelectField, TextareaField, TextField, Typography } from "../common";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail, MdPhone, MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";


export const PersonalInfo = () => {
    const t = useTranslations("common.booking.personalInfo");
    const tLocation = useTranslations("common.booking.location");
    const tCommon = useTranslations("common.booking");
    const [isAdditionalStop, setIsAdditionalStop] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    return (
        <>
             <div className="  flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                    <Typography variant="h3" className="!text-navy">{t('title')}</Typography>
                    <div className=" flex items-center gap-1">
                        <Typography className="!text-navy max-w-[600px] mt-2">{t('subtitle')}</Typography>
                    </div>
                </div>
                <Button title={tCommon('continue')} variant="default" className="!rounded-[6px] mt-5 md:mt-0" icon={<IoChevronForward className="text-white" />}/>
            </div>
              <div className="space-y-4">
                  <Typography variant="bodyLarge" className="!text-navy mt-8">{t('header')}</Typography>
                  <div className="grid md:grid-cols-2 gap-4">
                      <TextField placeholder={t('placeholderName')} icon={<IoPersonOutline  size={20}/>} />
                      <TextField placeholder={t('placeholderEmail')} icon={<MdOutlineEmail size={20} />} />
                      <TextField placeholder={t('placeholderPhone')} icon={<MdPhone size={20}/>} />
                  </div>
              </div>
                         <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] mt-5">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isAdditionalStop}
                  onChange={(e) => setIsAdditionalStop(e.target.checked)}
                />
                <div className="absolute inset-0 rounded-full bg-gray peer-checked:bg-primary transition-colors duration-200" />
                <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-[24px]" />
              </label>
            
              <Typography className="!text-navy mt-5">
                {tLocation('additionalStop')}
              </Typography>
            </div>
              <div className="space-y-4">
                  <Typography variant="bodyLarge" className="!text-navy mt-12">{t('detailsHeader')}</Typography>
                  <div className="grid md:grid-cols-2 gap-4">
                    <DateField inputClassName="!text-navy !font-light" icon={<MdOutlineDateRange size={20}/>}/>
                    <SelectField variant="location"/>
                     <TextField placeholder={t('placeholderAddress')} icon={<CiLocationOn />} />
                  </div>
              </div>
              <div className="space-y-4">
                  <Typography variant="bodyLarge" className="!text-navy mt-12">{t('specialRequests')}</Typography>
                  <div className="">
                    <TextareaField placeholder={t('placeholderRequest')} icon={<CiLocationOn />} />
                     <label  className="flex items-center gap-3 cursor-pointer mt-8">
      <input
        type="checkbox"
        checked={isAgreed}
        onChange={(e) => setIsAgreed(e.target.checked)}
        className="peer hidden"
      />
      {/* Checkbox box — direct sibling of peer input */}
      <div className={`w-5 h-5 flex-shrink-0 border border-gray-400 rounded-md flex items-center justify-center transition ${isAgreed ? "bg-primary border-primary" : "bg-transparent"}`}>
        <svg
          className={`w-3 h-3 flex-shrink-0 text-white transition ${isAgreed ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-navy text-[13px]">{t('terms')}</span>
    </label>
                  </div>
              </div>
        </>
    );
};  