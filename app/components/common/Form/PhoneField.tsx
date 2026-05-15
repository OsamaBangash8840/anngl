"use client";

import React, { useState, useEffect, useMemo } from "react";
import { CountryCodeSelectField } from "./CountryCodeSelectField";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type PhoneFieldVariant = "outline" | "underlined";
type LabelVariant = "default" | "bold" | "primary";

interface PhoneFieldProps {
  label?: string;
  labelVariant?: LabelVariant;
  variant?: PhoneFieldVariant;
  value?: string; // Expecting full number with country code or just number? 
  // Given JoinUsForm, it seems it expects the full number or just the input part.
  // We'll handle it as a combined field.
  onChange?: (phone: string) => void;
  error?: string;
  placeholder?: string;
  defaultCountry?: string;
  className?: string;
}

const labelStyles: Record<LabelVariant, string> = {
  default: "text-primary",
  bold: "text-navy font-bold",
  primary: "text-primary-light-100",
};

export const PhoneField: React.FC<PhoneFieldProps> = ({
  label,
  labelVariant = "default",
  variant = "outline",
  value = "",
  onChange,
  error,
  placeholder = "50 000 0000",
  defaultCountry = "SA",
  className,
}) => {
  const [isoCode, setIsoCode] = useState(defaultCountry);

  const handleCountryChange = (phonecode: string, iso: string) => {
    setIsoCode(iso);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    if (onChange) {
      onChange(newVal);
    }
  };

  return (
    <div className={twMerge("flex flex-col gap-y-1 w-full", className)}>
      {label && (
        <label className={clsx("text-[13px] text-start", labelStyles[labelVariant])}>
          {label}
        </label>
      )}
      <div 
        className={clsx(
          "flex items-center w-full transition-all duration-300 overflow-hidden",
          {
            "border bg-white rounded-[6px]": variant === "outline",
            "border !border-white bg-[#ECECED] rounded-[6px]": variant === "underlined",
            "border-red-500": error,
            "border-primary-light-100": !error,
          }
        )}
      >
        <div className="w-[100px]">
          <CountryCodeSelectField 
            value={isoCode}
            onChange={handleCountryChange}
            noBorder
            variant={variant}
          />
        </div>
        <input
          type="tel"
          placeholder={placeholder}
          value={value}
          onChange={handleNumberChange}
          className="flex-1 px-4 py-3 outline-none text-sm text-gray-900 bg-transparent placeholder:text-gray/60"
        />
      </div>
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};
