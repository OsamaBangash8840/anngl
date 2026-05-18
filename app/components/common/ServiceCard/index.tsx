import Image from "next/image";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

interface IServiceCard {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  iconAlt?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const ServiceCard = ({
  
  icon,
  title,
  description,
  buttonText,
  iconAlt = "Service Icon",
  backgroundColor,
  className,
  textColor,
}: IServiceCard) => {
  const [color, opacity] = backgroundColor?.split("/") || [];
  const style = color
    ? {
        backgroundColor: opacity
          ? `${color}${Math.round((parseInt(opacity) / 100) * 255)
              .toString(16)
              .padStart(2, "0")}`
          : color,
      }
    : {};
        const t = useTranslations('common.services');


  return (
    <div
      className={twMerge(clsx("relative h-full", className))}
      style={style}
    >
      <div className="px-6 py-12 w-full h-full flex flex-col">
        <Image
          src={icon}
          alt={iconAlt}
          width={60}
          height={42}
          className="w-[60px] h-[42px]"
        />
        <Typography 
          variant="bodyMedium" 
          className={twMerge(clsx("w-full mt-3 !font-semibold", textColor ? `!text-[${textColor}]` : "!text-navy"))}
        >
          {title}
        </Typography>
        <Typography 
          variant="bodySmall" 
          className={twMerge(clsx("w-full mt-3 !text-[12px]", textColor ? `!text-[${textColor}]` : "!text-navy"))}
        >
          {description}
        </Typography>
        <div className="mt-auto">
          <Button
            title={t("button")}
            variant="white"
            className="!px-8 !text-[14px] mt-6 !bg-navy !text-white !font-light !rounded-[12px]"
            icon={<FaArrowRightLong className="text-white" />}
          />
        </div>
      </div>
    </div>
  );
};
