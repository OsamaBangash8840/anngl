import React from "react";

interface textFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  autoComplete?: string;
  gradientBorder?: boolean;
  error?: string;
}
export const TextField = ({
  icon,
  placeholder,
  className,
  label,
  type = "text",
  value,
  onChange,
  required,
  disabled,
  gradientBorder,
  error,
  ...rest
}: textFieldProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-y-1 w-full ">
      {label && (
        <label className="text-[13px] font-regular text-start text-primary">
          {label}
        </label>
      )}
    
        <div
          className={`w-full h-[44px] flex items-center gap-x-2 border bg-white rounded-[6px] px-4 ${className || ""} ${
            error ? "border-red-500" : "border-primary-light-100"
          }`}
        >
          {icon && <span className="text-black-400 dark:text-gray-400 text-xl">{icon}</span>}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className="placeholder:text-gray dark:placeholder:text-gray-500 mt-1 text-sm flex-1 outline-none bg-transparent text-gray-900 dark:text-gray-100"
            {...rest}
          />
        </div>
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};
