import Image from "next/image"
import { Button, Typography } from "../common"
import { useTranslations } from "next-intl";

export const WhoWeAre = () => {
    const t = useTranslations('common.home.whoWeAre');
    return (
        <div>
            <div className=" flex flex-col md:flex-row justify-center bg-primary items-center gap-8 md:gap-20">
                    <Image
                        src="/images/whoWeAre.svg"
                        alt="Who We Are"
                        width={500}
                        height={500}
                        className="w-full h-auto flex-1"
                    />
                <div className="flex-1 md:mt-8 px-5 mx-5 md:mx-0 mt-3 mb-5 md:mb-0 md:px-0">
                    <Typography variant="h2" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-16 after:h-[1.5px] after:bg-black">{t('title')}</Typography>
                    <Typography variant="hDisplay" className="max-w-[420px] mt-8">{t('heading')} <span className="font-homemade-apple !font-regular text-black">{t('leader')}</span></Typography>
                    <Typography variant="bodyMedium" className="mt-5 max-w-[503px]">{t('description')}</Typography>
                    <Button
                        title={t('aboutUs')}
                        variant="white"
                        className="mt-8 !bg-navy !text-white"
                    />
                </div>
                
            </div>
        </div>
    )
}