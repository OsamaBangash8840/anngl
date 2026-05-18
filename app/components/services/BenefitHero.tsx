import Image from "next/image"
import { Typography } from "../common"
import { useTranslations } from "next-intl"

export const BenefitHero = () => {
    const t = useTranslations("common.serviceBenefit.hero");
    return (
        <>
        <section
        className=" bg-[#63818D] ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-52 pt-10 py-8 ">
                <Typography variant="hDisplay" className="text-white !text-[40px] w-[286.5px]">{t('title')}</Typography>
                <Typography variant="bodyMedium" className="w-[320px] ">{t('description')}</Typography>
            </div>

            <div className="flex justify-between items-center pb-10 " dir="ltr">
                           <div className="flex mt-3 relative ml-[3%] md:ml-[10%] 2xl:ml-[10%]">
                            <Typography variant="h3" className=" !text-[40px] !font-homemade-apple !text-primary ml-[80%] 2xl:ml-[100%] ">anngl</Typography>
                            <Image
                               src="/images/anngllineBenefit.svg"
                               alt="About Us"
                               width={249}
                               height={100}
                               className="w-full max-w-[249px] -ml-4"
                               />
                           </div>
                            <Image
                               src="/images/annglline.svg"
                               alt="About Us"
                               width={249}
                               height={100}
                               className="w-full max-w-[249px] mr-[16%] 2xl:mr-[30%] mt-3"
                               />
                        </div>
            </section>
        </>
    )
}