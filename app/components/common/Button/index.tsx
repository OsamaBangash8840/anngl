"use client";

import React, { type ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  variant?: "default" | "black" | "outline" | "gradient" | "primary" | "white";
  size?: "small" | "default";
}

export const Button = ({
  title,
  className = "",
  loading = false,
  icon,
  variant = "default",
  size = "default",
  ...rest
}: IButton): React.ReactElement => {
  const baseStyles =
    "group cursor-pointer font-medium transition-all duration-300 flex items-center justify-center gap-2";

  const sizeStyles = {
    small: "h-[30px] px-3 text-xs",
    default: "h-[39px] lg:h-[45px] px-5 text-sm lg:text-base",
  };

  const variantStyles = {
    default: `bg-primary rounded-[6px] text-white font-normal !px-6 text-[16px]`,
    black: `bg-blue-900 text-white rounded-full`,
    outline: `bg-white border border-blue-900 text-blue-900 rounded-full`,
    gradient: `bg-gradient-to-r from-[#0AA44F] to-[#BC8A29] text-white rounded-full`,
    primary: "bg-[#E0922A] text-white rounded-lg",
    white: `bg-white text-navy rounded-[6px]`,
  };

  const iconStyles =
    variant === "outline"
      ? "text-blue-900 group-hover:text-blue-900 group-hover:rotate-45 group-hover:scale-110"
      : "text-white group-hover:rotate-45 group-hover:scale-110";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {!loading ? title : "Loading..."}
      {icon && (
        <span className={`transition-all text-lg ${iconStyles}`}>{icon}</span>
      )}
    </button>
  );
};
