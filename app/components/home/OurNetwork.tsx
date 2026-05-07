"use client";

import Image from "next/image";
import { Typography } from "../common"
import { IoLocation } from "react-icons/io5";
import { useTranslations } from "next-intl";

export const OurNetwork = () => {
    const t = useTranslations('common.home');

    return (
        <section style={{
        backgroundImage: "url(/images/ourNetwork.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full py-16 md:py-16 bg-primary relative">
            <div className="container flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                <div className="flex-[1.2]">
                    <Typography variant="h2" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-16 after:h-[1.7px] after:bg-black">
                        {t('ourNetwork')}
                    </Typography>
                    <Typography variant="hDisplay" className=" mt-8 !leading-[55px]">
                        {t('coverArea')}
                    </Typography>
                </div>
                <div className="flex-1 mt-8 md:mt-0 ">
                    <Image
                        src="/images/globe.gif"
                        alt="World Map"
                        width={100}
                        height={100}
                        className="w-[600px] -mt-22"
                    />
                </div>
            </div>
            <div className="absolute left-[10%] md:left-[27%] bottom-8 flex justify-center items-center gap-1">
                <IoLocation className="text-[18px]" />
                <Typography variant="bodySmall">{t('locations.malaysia')}</Typography>
            </div>
             <div className="absolute right-15 md:right-[45%] top-[21%] flex justify-center items-center gap-1">
                <IoLocation className="text-[18px]" />
                <Typography variant="bodySmall">{t('locations.saudiArabia')}</Typography>
            </div>
             <div className="absolute bottom-15 right-[7%] flex justify-center items-center gap-1">
                <IoLocation className="text-[18px]" />
                <Typography variant="bodySmall">{t('locations.unitedStates')}</Typography>
            </div>
        </section>
    )
}
