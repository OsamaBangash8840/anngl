"use client";

import React, { useMemo } from "react";
import { SelectField } from "./SelectField";
import { State } from "country-state-city";

interface StateOption {
  value: string; // ISO Code
  label: string;
}

interface StateSelectFieldProps {
  countryCode: string;
  label?: string;
  placeholder?: string;
  value?: string; // State Name or Code
  onChange?: (stateName: string, stateCode: string) => void;
  className?: string;
  error?: string;
  required?: boolean;
  isDisabled?: boolean;
}

export const StateSelectField: React.FC<StateSelectFieldProps> = ({
  countryCode,
  label = "State",
  placeholder = "Select State",
  value,
  onChange,
  className,
  error,
  required = false,
  isDisabled = false,
}) => {
  const options = useMemo(() => {
    if (!countryCode) return [];
    return State.getStatesOfCountry(countryCode).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
  }, [countryCode]);

  const handleChange = (selectedOption: any) => {
    if (onChange) {
      if (selectedOption) {
        onChange(selectedOption.label, selectedOption.value);
      } else {
        onChange("", "");
      }
    }
  };

  const selectedValue = useMemo(() => {
    if (!value || !options.length) return null;
    // Try to find by name or code
    return options.find(opt => opt.label === value || opt.value === value) || null;
  }, [value, options]);

  return (
    <div className={className}>
      <SelectField
        label={label}
        placeholder={!countryCode ? "Select country first" : placeholder}
        value={selectedValue}
        onChange={handleChange}
        options={options}
        error={error || undefined}
        required={required}
        isDisabled={isDisabled || !countryCode}
        isSearchable
        noOptionsMessage={() => (countryCode ? "No states found" : "Please select a country first")}
      />
    </div>
  );
};
