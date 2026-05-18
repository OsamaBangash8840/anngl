import Image from "next/image"
import { Typography } from "../common"
import { useTranslations } from "next-intl"

export const AfterWhoWeAre = () => {
    const t = useTranslations("common.home");
    return (
        <div style={{
        backgroundImage: "url(/images/AfterWhoWeAre.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full h-[500px]">
       <div className="flex items-center justify-center">
        <Typography variant="hDisplay" className="flex items-center justify-center text-center !text-[25px] md:!text-[48px] pt-[220px]" >{t('whyChoose')} <Image src="/images/logoPrimary.svg" alt="logo" width={173} height={56} /> ?</Typography>
       </div>
       <div className="flex items-center justify-center mt-3">
        <Typography variant="bodySmall">{t('easyMoving')}</Typography>
       </div>
        </div>
    )
}