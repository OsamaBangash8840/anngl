import React from "react";
import { MdCalendarToday } from "react-icons/md";
import { TextField } from "./Textfield";

interface DateFieldProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  gradientBorder?: boolean;
  error?: string;
}

export const DateField = ({
  label,
  placeholder,
  className,
  value,
  onChange,
  required,
  disabled,
  gradientBorder,
  error,
  ...rest
}: DateFieldProps): React.ReactElement => {
  return (
    <TextField
      type="date"
      label={label}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      gradientBorder={gradientBorder}
      error={error}
      icon={<MdCalendarToday className="text-teal"/>}
      {...rest}
    />
  );
};
