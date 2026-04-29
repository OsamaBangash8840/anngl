"use client";

import React, { useMemo } from "react";
import Select, { components, SingleValueProps, OptionProps, DropdownIndicatorProps } from "react-select";
import { Country } from "country-state-city";
import Image from "next/image";

interface CountryCodeOption {
  value: string;    // isoCode e.g. "US"
  label: string;    // display label e.g. "🇺🇸 +1"
  flag: string;
  phonecode: string;
  name: string;
}

interface CountryCodeSelectFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;   // isoCode e.g. "SA"
  onChange?: (phonecode: string, isoCode: string) => void;
  className?: string;
  error?: string;
  required?: boolean;
  isDisabled?: boolean;
  defaultCountry?: string; // isoCode, defaults to "SA"
  noBorder?: boolean;
}

const CustomOption = (props: OptionProps<CountryCodeOption>) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <Image 
          src={`https://flagcdn.com/w40/${data.value.toLowerCase()}.png`} 
          alt={data.name} 
          width={20} 
          height={15} 
          className="rounded-sm"
        />
        <span className="text-sm text-gray-900">{data.name}</span>
        <span className="text-sm text-gray-400">+{data.phonecode}</span>
      </div>
    </components.Option>
  );
};

const CustomSingleValue = (props: SingleValueProps<CountryCodeOption>) => {
  const { data } = props;
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center gap-2">
        <Image 
          src={`https://flagcdn.com/w40/${data.value.toLowerCase()}.png`} 
          alt={data.name} 
          width={24} 
          height={18} 
          className="rounded-sm"
        />
        <span className="text-sm text-gray-400">+{data.phonecode}</span>
      </div>
    </components.SingleValue>
  );
};

const CustomDropdownIndicator = (props: DropdownIndicatorProps<CountryCodeOption>) => {
  return null;
};

export const CountryCodeSelectField: React.FC<CountryCodeSelectFieldProps> = ({
  label,
  placeholder = "+966",
  value,
  onChange,
  className,
  error,
  required = false,
  isDisabled = false,
  defaultCountry = "SA",
  noBorder = false,
}) => {
  const options: CountryCodeOption[] = useMemo(() => {
    return Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: `${country.flag} +${country.phonecode}`,
      flag: country.flag,
      phonecode: country.phonecode,
      name: country.name,
    }));
  }, []);

  const handleChange = (selectedOption: any) => {
    if (onChange) {
      if (selectedOption) {
        onChange(selectedOption.phonecode, selectedOption.value);
      } else {
        onChange("", "");
      }
    }
  };

  const selectedValue = useMemo(() => {
    const code = value || defaultCountry;
    if (!code || !options.length) return null;
    return options.find((opt) => opt.value === code) || null;
  }, [value, defaultCountry, options]);

  return (
    <div className={`flex flex-col gap-y-1 w-full ${className || ""}`}>
      {label && (
        <label className="text-[13px] font-regular text-start text-primary">
          {label}
        </label>
      )}
      <Select<CountryCodeOption>
        options={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isSearchable
        isClearable={false}
        menuPortalTarget={typeof document !== "undefined" ? document.body : null}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
        components={{
          Option: CustomOption,
          SingleValue: CustomSingleValue,
          DropdownIndicator: CustomDropdownIndicator,
        }}
        classNames={{
          control: ({ isFocused }) =>
            `!min-h-[44px] !bg-white !px-4 !cursor-pointer ${
              noBorder ? "!border-none !rounded-none" : "!border !rounded-[6px]"
            } ${
              isFocused && !noBorder
                ? "!border-primary !shadow-none"
                : error
                ? "!border-red-500"
                : !noBorder ? "!border-primary-light-100" : ""
            }`,
          placeholder: () => "!text-gray !text-sm",
          singleValue: () => "!text-gray-900 !text-sm",
          menu: () => "!bg-white !border !border-black/10 !shadow-lg !z-50",
          option: ({ isFocused, isSelected }) =>
            `!text-sm ${
              isSelected
                ? "!bg-primary !text-white"
                : isFocused
                ? "!bg-primary-light-100 !text-gray-900"
                : "!text-gray-900"
            }`,
          input: () => "!text-gray-900 !text-sm",
          indicatorSeparator: () => "!hidden",
          valueContainer: () => "!px-0",
        }}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};
