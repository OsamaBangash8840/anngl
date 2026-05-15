"use client";

import React from "react";
import Select, { Props as SelectProps, SingleValue } from "react-select";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type SelectVariant = "outline" | "underlined" | "location";
type LabelVariant = "default" | "bold" | "primary";

interface Option {
  value: string;
  label: string;
}

interface ISelectField extends Omit<SelectProps<Option, false>, "onChange" | "value"> {
  label?: string;
  labelVariant?: LabelVariant;
  error?: string;
  value?: Option | null;
  onChange?: (newValue: SingleValue<Option>) => void;
  required?: boolean;
  variant?: SelectVariant;
}

const labelStyles: Record<LabelVariant, string> = {
  default: "text-primary",
  bold: "text-navy",
  primary: "text-primary-light-100",
};

export const SelectField = ({
  label,
  labelVariant = "default",
  error,
  options,
  value,
  onChange,
  required,
  placeholder = "Select...",
  isDisabled,
  variant = "outline",
  ...rest
}: ISelectField): React.ReactElement => {
  return (
    <div className={twMerge("flex flex-col gap-y-1 w-full", rest.className)}>
      {label && (
        <label className={clsx("text-[13px] text-start", labelStyles[labelVariant])}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        classNamePrefix="react-select"
        styles={{
          option: (base, { isSelected, isFocused }) => ({
            ...base,
            backgroundColor: isSelected
              ? variant === "underlined"
                ? "#C8D5D9"
                : "#C8D5D9"
              : isFocused
              ? "#C8D5D9"
              : "#E2E9EB",
            color: "#1a2e35",
            cursor: "pointer",
            fontSize: "14px",
          }),
          control: (base) => ({
            ...base,
            boxShadow: "none",
          }),
        }}
        classNames={{
          control: ({ isFocused, isDisabled, hasValue }) =>
            clsx(
              "!min-h-[44px] !px-4 !cursor-pointer !transition-all !duration-300",
              {
                "!bg-white !border !rounded-[6px]": variant === "outline",
                "!bg-[#ECECED] !border !border-white !rounded-[6px]": variant === "underlined",
                "!bg-white !border !border-primary-light-100 !rounded-[6px]": variant === "location",
                "!bg-[#C8D5D9]": (isFocused || (hasValue && variant === "underlined")) && variant === "underlined",
                "!border-red-500": error,
                "!border-primary/30": !error && !isFocused && variant === "outline",
                "!border-primary !ring-1 !ring-primary/20": isFocused && !error && variant === "outline",
                "!opacity-50": isDisabled,
              }
            ),
          placeholder: () => "!text-gray-900 !text-sm",
          singleValue: () => "!text-gray-900 !text-sm",
          menu: () => "!bg-[#C8D5D9] !border !border-black/10 !shadow-lg !z-50",
          input: () => "!text-gray-900 !text-sm",
          dropdownIndicator: () => "!text-teal",
          indicatorSeparator: () => "!hidden",
        }}
        {...rest}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};