import React from "react";

interface TextareaFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  rows?: number;
  error?: string;
}

export const TextareaField = ({
  icon,
  placeholder,
  className,
  label,
  value,
  onChange,
  required,
  disabled,
  rows = 4,
  error,
  ...rest
}: TextareaFieldProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label && (
        <label className="text-[13px] font-regular text-start text-primary">
          {label}
        </label>
      )}

      <div
        className={`w-full flex items-start gap-x-2 border bg-white rounded-[6px] px-4 py-3 ${className || ""} ${
          error ? "border-red-500" : "border-primary-light-100"
        }`}
      >
        {icon && (
          <span className="text-black-400  text-xl mt-0.5">
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
