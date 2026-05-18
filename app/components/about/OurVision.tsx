import Image from "next/image";
import { Typography } from "../common";
import { useTranslations } from "next-intl";

export const OurVision = () => {
      const t = useTranslations('common.about');
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
                <div className="flex flex-col justify-center items-start py-16 pl-[10%] pr-10 md:pr-24 bg-navy" >
                    <div className="max-w-[600px]">
                        <Image
                            src="/images/ourVision.svg"
                            alt="Our Vision"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <Typography className=" mt-4 text-white"  variant="h2">{t('vision.title')}</Typography>
                        <Typography className=" mt-4 text-white leading-relaxed">{t('vision.description')}</Typography>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start py-16 pr-[10%] pl-10 md:pl-24 bg-teal " >
                    <div className="max-w-[600px] flex flex-col items-start">
                        <Image
                            src="/images/ourVisionIcon.svg"
                            alt="Our Mission"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <Typography className=" mt-4 text-white"  variant="h2">{t("mission.title")}</Typography>
                        <Typography className=" mt-4 text-white ">{t("mission.description")}</Typography>
                    </div>
                </div>
        </section>
    )
}