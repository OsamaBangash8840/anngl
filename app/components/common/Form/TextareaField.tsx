import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

type TextareaFieldVariant = "outline" | "contact";
type LabelVariant = "default" | "bold" | "primary";

interface TextareaFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  labelVariant?: LabelVariant;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  rows?: number;
  error?: string;
  variant?: TextareaFieldVariant;
}

const labelStyles: Record<LabelVariant, string> = {
  default: "text-primary",
  bold: "text-navy",
  primary: "text-primary-light-100",
};

export const TextareaField = ({
  icon,
  placeholder,
  className,
  label,
  labelVariant = "default",
  value,
  onChange,
  required,
  disabled,
  rows = 4,
  error,
  variant = "outline",
  ...rest
}: TextareaFieldProps): React.ReactElement => {
  const containerClasses = clsx(
    "w-full flex items-start gap-x-2 px-4 py-3 transition-all duration-300",
    {
      "border bg-white rounded-[6px]": variant === "outline",
      "!border-b !border-navy bg-[#ECECED] ": variant === "contact",
      "border-red-500": error,
      "border-primary-light-100": !error && variant === "outline",
    }
  );

  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label && (
        <label className={clsx("text-[13px] font-regular text-start mt-3", labelStyles[labelVariant])}>
          {label}
        </label>
      )}

      <div className={twMerge(containerClasses, className)}>
        {icon && (
          <span className="text-black-400 text-xl mt-0.5">
            {icon}
          </span>
        )}
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          rows={rows}
          className="placeholder:text-gray text-sm flex-1 outline-none bg-transparent text-gray-900 resize-none"
          {...rest}
        />
      </div>

      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};
