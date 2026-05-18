import Image from "next/image"
import { Typography } from "../common"
import { useTranslations } from "next-intl"

export const WhyChooseUs = () => {
    const t = useTranslations("common.workWithUs.whyChooseUs");
    return (
        <section className=" grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] mt-20 pb-8 md:pb-1 ">
            <div className="p-8 lg:p-28" 
                style={{
                    backgroundImage: "url(/images/whyChooseUs.svg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Typography variant="h2" className="text-center">{t("title")}</Typography>
            </div>
            <div className="bg-white  ">
                <Image src={'/images/whyChooseUsIcon1.svg'} alt="" width={40} height={40} className="mx-auto mb-4 mt-16" />
                <Typography className="!text-navy text-center md:px-8 px-1 mt-6">{t("feature1")}</Typography>
            </div>
            <div className="bg-[#204A60]  ">
                <Image src={'/images/whyChooseUsIcon2.svg'} alt="" width={40} height={40} className="mx-auto mb-4 mt-16" />
                <Typography className=" text-center pb-4 md:pb-0 md:px-8 px-1 mt-6">{t("feature2")}</Typography>
            </div>
            <div className="bg-[#ADAEB1]">
                <Image src={'/images/whyChooseUsIcon3.svg'} alt="" width={40} height={40} className="mx-auto mb-4 mt-16" />
                <Typography className="text-center pb-4 md:pb-0 md:px-8 px-1 mt-6">{t("feature3")}</Typography>
            </div>
        </section>
    );
};