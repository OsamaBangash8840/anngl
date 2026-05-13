import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

type TextFieldVariant = "outline" | "underlined" | "contact" | "search";
type LabelVariant = "default" | "bold" | "primary";
type IconVariant = "default" | "primary" | "muted" | "search";
type ErrorVariant = "default" | "bold";

interface textFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconVariant?: IconVariant;
  label?: string;
  labelVariant?: LabelVariant;
  variant?: TextFieldVariant;
  error?: string;
  errorVariant?: ErrorVariant;
  gradientBorder?: boolean;
}

const labelStyles: Record<LabelVariant, string> = {
  default: "text-primary",
  bold: "text-navy mt-4",
  primary: "text-primary-light-100",
};

const iconStyles: Record<IconVariant, string> = {
  default: "text-black-400",
  primary: "text-primary",
  muted: "text-gray-400",
  search: "text-[#ADAEB1]",
};

const errorStyles: Record<ErrorVariant, string> = {
  default: "text-red-500 font-normal",
  bold: "text-red-600 font-bold",
};

export const TextField = ({
  icon,
  iconVariant = "default",
  placeholder,
  className,
  label,
  labelVariant = "default",
  type = "text",
  error,
  errorVariant = "default",
  variant = "outline",
  gradientBorder = false,
  ...rest
}: textFieldProps): React.ReactElement => {
  const containerClasses = clsx(
    "w-full h-[44px] flex items-center gap-x-2 transition-all duration-300",
    {
      "border bg-white rounded-[6px] px-4": variant === "outline",
      "border !border-white bg-[#ECECED] rounded-[6px] px-4 focus-within:bg-[#C8D5D9]": variant === "underlined",
      "!border-b !border-navy bg-[#ECECED] px-4 ": variant === "contact",
      "border border-primary-light-100 bg-white !text-[#ADAEB1] rounded-[6px] px-4 focus-within:bg-[#C8D5D9]": variant === "search",
      "border-red-500": error,
      "border-primary-light-100 focus-within:border-primary": !error && !gradientBorder,
      "border-2 border-transparent bg-gradient-to-r from-primary to-primary-light-400 bg-clip-border": gradientBorder,
    }
  );

  return (
    <div className="flex flex-col gap-y-1 w-full ">
      {label && (
        <label className={clsx("text-[13px] text-start", labelStyles[labelVariant])}>
          {label}
        </label>
      )}
      <div className={twMerge(containerClasses, className)}>
        {icon && <span className={clsx("text-xl", iconStyles[iconVariant])}>{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className={twMerge(
            "placeholder:text-gray placeholder:font-light mt-1 text-sm flex-1 outline-none bg-transparent text-primary",
            variant === "search" ? "font-normal" : "font-semibold"
          )}
          {...rest}
        />
      </div>
      {error && (
        <span className={clsx("text-xs mt-1", errorStyles[errorVariant])}>
          {error}
        </span>
      )}
    </div>
  );
};
