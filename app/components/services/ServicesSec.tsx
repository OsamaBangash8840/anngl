import { ServiceCard, Typography } from "../common"
import { useTranslations } from "next-intl";
export const ServicesSec = () => {
  const t = useTranslations('common.services');
    return (
        <>
        <Typography className="text-center !text-navy my-8 " variant="hDisplay">{t('title')}</Typography>
        <section className="grid md:grid-cols-5"
        style={{
        backgroundImage: "url(/images/ourServicesBg.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
        >
                <ServiceCard 
                  icon="/images/transportationIcon.svg"
                  title={t('cards.international.title')}
                  description={t('cards.international.description')}
                  backgroundColor="#ADAEB1/70"
                />  
                  <ServiceCard 
                  icon="/images/boxIcon.svg"
                  title={t('cards.local.title')}
                  description={t('cards.local.description')}
                  backgroundColor="#DA6635/70"
                  textColor="white"
                />   
                 <ServiceCard 
                  icon="/images/transportationIcon.svg"
                  title={t('cards.car.title')}
                  description={t('cards.car.description')}
                  backgroundColor="#FFFFFF/70"
                />  
                  <ServiceCard 
                  icon="/images/carmeraIcon.svg"
                  title={t('cards.device.title')}
                  description={t('cards.device.description')}
                  backgroundColor="#204A60/70"
                   textColor="white"
                />  
                  <ServiceCard 
                  icon="/images/furnitureIcon.svg"
                  title={t('cards.furniture.title')}
                  description={t('cards.furniture.description')}
                  backgroundColor="#112A35/70"
                   textColor="white"
                />
  
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 my-16">
            <div className="bg-[#ADAEB1] w-[300px] ">
                <Typography variant="bodyLarge" className="!text-navy text-center px-8 pt-9">{t('features.fastSecure.title')}</Typography>
                <Typography variant="bodySmall" className="!text-navy text-center px-8  my-3">{t('features.fastSecure.description')}</Typography>
            </div>
            <div className="bg-[#ADAEB1] w-[300px] ">
                <Typography variant="bodyLarge" className="!text-navy text-center px-8 pt-9">{t('features.servicesWide.title')}</Typography>
                <Typography variant="bodySmall" className="!text-navy text-center px-8  my-3">{t('features.servicesWide.description')}</Typography>
            </div>
        </section>
            </>
    )
}