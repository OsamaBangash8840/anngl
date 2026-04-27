import React, { type ElementType } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type Variant =
  | "hDisplay"
  | "h1"
  | "h2"
  | "h3"
  | "bodyMedium"
  | "bodyMediumBold"
  | "bodyLarge"
  | "bodySmall"
  | "accentLarge"
  | "accentSmall"

interface ITypography {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  hDisplay: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyMedium: "p",
  bodyMediumBold: "p",
  bodyLarge: "p",
  bodySmall: "p",
  accentLarge: "h1",
  accentSmall: "h1",
};

const sizes: Record<Variant, string> = {
  hDisplay: "font-sf-pro text-[32px] xl:text-[40px] xl:leading-auto text-white font-bold dark:text-white",
  h1: "font-sf-pro text-[26px] xl:text-[32px] font-bold xl:leading-auto text-white dark:text-white",
  h2: "font-sf-pro text-[22px] xl:text-[24px] font-semibold xl:leading-auto text-white dark:text-white",
  h3: "font-sf-pro text-[18px] xl:text-[20px] font-semibold xl:leading-auto text-white dark:text-white",
  bodyMedium: "font-sf-pro text-[14px] xl:text-[16px] font-normal xl:leading-auto text-white dark:text-white",
  bodyMediumBold: "font-sf-pro text-[16px] xl:text-[18px] font-semibold xl:leading-auto text-white dark:text-white",
  bodyLarge: "font-sf-pro text-[14px] xl:text-[16px] font-semibold xl:leading-auto text-white dark:text-white",
  bodySmall: "font-sf-pro text-[12px] xl:text-[14px] font-normal xl:leading-auto text-white dark:text-white", 
  accentLarge: "font-homemade-apple text-[32px] xl:text-[40px] font-normal xl:leading-auto text-white dark:text-white",
  accentSmall: "font-homemade-apple text-[28px] xl:text-[32px] font-normal xl:leading-auto text-white dark:text-white",
};

export const Typography = ({
  variant = "bodyMedium",
  children,
  className,
  as,
}: ITypography): React.ReactElement => {
  const sizeClasses = sizes[variant];
  const Tag = as ?? tags[variant];

  return (
    <Tag className={twMerge(clsx(sizeClasses, className))}>
      {children}
    </Tag>
  );
};
