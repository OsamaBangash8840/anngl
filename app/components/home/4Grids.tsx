import Image from "next/image";
import { Typography } from "../common";

export const FourGrids = () => {
    return (
        <div className=" bg-white grid grid-cols-4 my-32">
            <Grid
                image="/images/percentIcon.svg"
                title="Up to 45% Lower Prices"
                description="We offer a wide range of options at the best market prices with high-quality services."
                bgColor="bg-navy"
            />
            <Grid
                image="/images/watchIcon.svg"
                title="Free Cancellation 48 Hours Prior"
                description="We offer a wide range of options at the best market prices with high-quality services."
                bgColor="bg-primary"
            />
            <Grid
                image="/images/handshakeIcon.svg"
                title="Trusted Moving Experts"
                description="We offer a wide range of options at the best market prices with high-quality services."
                bgColor="bg-white"
                titleColor="text-[#204A60]"
                descriptionColor="text-[#204A60]"
            />
            <Grid
                image="/images/ShieldIcon.svg"
                title="High Safety & Peace of Mind"
                description="We offer a wide range of options at the best market prices with high-quality services."
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
        <div className={`${bgColor} flex flex-col items-center text-center mb-4 pb-16`}>
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