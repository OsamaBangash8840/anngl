import Image from "next/image";
import { Typography } from "../common";
import { useTranslations } from "next-intl";

export const WhoWeAre = () => {
      const t = useTranslations('common.about');
    return (
        <section className="w-full bg-primary grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[400px]">
                <div className="flex flex-col justify-center py-20 pl-[10%] pr-10 md:pr-20">
                    <div className="max-w-[600px]">
                        <Typography variant="h3" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-[-10px] after:w-20 after:h-[1.5px] after:bg-black">{t('whoWeAre.title')}</Typography>
                        <Typography variant="hDisplay" className="mt-4 ">{t('whoWeAre.subheading')}</Typography>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end p-12 md:p-24 bg-gray relative">
                    <Image
                        src="/images/aboutUsWoWeAreIcon.svg"
                        alt="About Us"
                        width={80}
                        height={80}
                        className="w-20 h-20"
                    />
                    <Typography className="!text-navy text-right mt-4 ">{t('whoWeAre.description')}</Typography>
                    <Image
                        src="/images/annglline.svg"
                        alt="About Us"
                        width={612}
                        height={100}
                        className="w-full max-w-[612px] mt-5 z-0 absolute bottom-2 md:bottom-10 left-0"
                    />
                </div>
        </section>
    )
}