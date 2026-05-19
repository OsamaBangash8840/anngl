import Image from "next/image";
import { Typography } from "../common";
import { useTranslations } from "next-intl";

export const FourGrids = () => {
    const t = useTranslations("common.home.features");
    return (
        <div className=" bg-white grid md:grid-cols-4 grid-cols-1 my-8 md:my-32">
            <Grid
                image="/images/percentIcon.svg"
                title={t('lowerPrices')}
                description={t('lowerPricesDesc')}
                bgColor="bg-navy"
            />
            <Grid
                image="/images/watchIcon.svg"
                title={t('freeCancellation')} 
                description={t('freeCancellationDesc')}
                bgColor="bg-primary"
            />
            <Grid
                image="/images/handshakeIcon.svg"
                title={t('trustedExperts')} 
                description={t('trustedExpertsDesc')}
                bgColor="bg-white"
                titleColor="text-[#204A60]"
                descriptionColor="text-[#204A60]"
            />
            <Grid
                image="/images/ShieldIcon.svg"
                title={t('highSafety')}
                description={t('highSafetyDesc')}
                bgColor="bg-teal"
            />
        </div>
    )
}

interface gridProps {
    image: string;
    title: string;
    description: string; 
    bgColor:string 
    titleColor?:string;
    descriptionColor?:string
}

const Grid = ({image, title, description, bgColor, titleColor, descriptionColor}: gridProps) => {
    return (
        <div className={`${bgColor} flex flex-col items-center text-center mb-4 pb-16 mt-8 md:mt-0`}>
            <Image
                src={image}
                alt={title}
                width={20}
                height={20}
                className="w-20 h-20 -mt-10"
            />
            <div className="w-[60%]">
            <Typography className={`mt-8 ${titleColor}`} variant="h2">{title}</Typography>
            <Typography className={`mt-3 ${descriptionColor}`} variant="bodyMedium">{description}</Typography>
            </div>
                    </div>
    )
}