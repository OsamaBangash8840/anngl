"use client";

import React from "react";
import Select, { Props as SelectProps, SingleValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

interface ISelectField extends Omit<SelectProps<Option, false>, "onChange" | "value"> {
  label?: string;
  error?: string;
  value?: Option | null;
  onChange?: (newValue: SingleValue<Option>) => void;
  required?: boolean;
}

export const SelectField = ({
  label,
  error,
  options,
  value,
  onChange,
  required,
  placeholder = "Select...",
  isDisabled,
  ...rest
}: ISelectField): React.ReactElement => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label && (
        <label className="text-[13px] font-regular text-start text-primary">
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
        classNames={{
          control: ({ isFocused, isDisabled }) =>
            `!min-h-[44px] !bg-white  !border !rounded-[6px] !px-2 ${
              isFocused ? "!border-primary !shadow-none" : "!border-primary-light-100 "
            } ${isDisabled ? "!opacity-50" : ""}`,
          placeholder: () => "!text-gray-900  !text-sm",
          singleValue: () => "!text-gray-900  !text-sm",
          menu: () => "!bg-white  !border !border-black/10 !shadow-lg",
          option: ({ isFocused, isSelected }) =>
            `!text-sm ${
              isSelected
                ? "!bg-primary !text-white"
                : isFocused
                ? "!bg-primary-light-100 !text-gray-900"
                : "!text-gray-900 "
            }`,
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
