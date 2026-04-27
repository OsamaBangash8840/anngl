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
            `!min-h-[44px] !bg-white dark:!bg-gray-700 !border !rounded-[6px] !px-2 ${
              isFocused ? "!border-primary !shadow-none" : "!border-primary-light-100 dark:!border-gray-600"
            } ${isDisabled ? "!opacity-50" : ""}`,
          placeholder: () => "!text-teal dark:!text-gray-500 !text-sm",
          singleValue: () => "!text-teal dark:!text-gray-100 !text-sm",
          menu: () => "!bg-white dark:!bg-gray-800 !border !border-black/10 dark:!border-gray-700 !shadow-lg",
          option: ({ isFocused, isSelected }) =>
            `!text-sm ${
              isSelected
                ? "!bg-primary !text-white"
                : isFocused
                ? "!bg-primary-light-100 dark:!bg-gray-700 !text-gray-900 dark:!text-gray-100"
                : "!text-gray-900 dark:!text-gray-100"
            }`,
          input: () => "!text-gray-900 dark:!text-gray-100 !text-sm",
          dropdownIndicator: () => "!text-teal",
          indicatorSeparator: () => "!hidden",
        }}
        {...rest}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};
