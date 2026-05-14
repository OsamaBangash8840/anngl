"use client";
import React, { useRef } from "react";
import { MdCalendarToday } from "react-icons/md";
import { TextField } from "./Textfield";

interface DateFieldProps {
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  gradientBorder?: boolean;
  error?: string;
  icon?: React.ReactNode;
}

export const DateField = ({
  label,
  placeholder,
  className,
  inputClassName = "", // ← no default color here, let TextField or user control it
  wrapperClassName,
  value,
  onChange,
  required,
  disabled,
  gradientBorder,
  error,
  icon = <MdCalendarToday className="text-teal" />,
  ...rest
}: DateFieldProps): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (disabled) return;
    const input = inputRef.current;
    if (input) {
      input.focus();
      input.showPicker();
    }
  };

  return (
    <TextField
      type="date"
      label={label}
      placeholder={placeholder}
      className={className}
      inputClassName={inputClassName}
      wrapperClassName={wrapperClassName}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      gradientBorder={gradientBorder}
      error={error}
      inputRef={inputRef}
      icon={
        <span
          onClick={handleIconClick}
          className={`cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {icon}
        </span>
      }
      {...rest}
    />
  );
};