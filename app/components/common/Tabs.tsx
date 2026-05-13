"use client";

import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface TabItem {
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  className?: string;
  variant?: "default" | "underline";
}

export const Tabs = ({
  items,
  className,
  variant = "default",
}: TabsProps): React.ReactElement => {
  const variantStyles = {
    default: {
      list: "gap-2 sm:gap-3",
      tab: (selected: boolean) =>
        twMerge(
          "py-[8px] px-4 md:py-4 md:px-8 text-[14px] sm:text-sm font-regular flex flex-col justify-center font-sf-pro items-center gap-y-2 leading-5 border transition-all duration-300 outline-none cursor-pointer rounded-[6px] flex-1 overflow-hidden",
          selected
            ? "bg-primary text-white border-primary shadow-lg scale-105 z-10"
            : "border-white text-white hover:bg-white/10"
        ),
    },
    underline: {
      list: "flex gap-2 p-1 isActive:bg-[#63818D] rounded-sm  isActive:text-white text-[#112A35]",
      tab: (selected: boolean) =>
        twMerge(
          "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 outline-none cursor-pointer relative rounded-sm flex-1",
          selected
            ? "text-white bg-[#63818D] "
            : "text-[#112A35] hover:text-[#112A35] border border-[#C8D5D9]"
        ),
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <div className={twMerge("w-full", className)}>
      <TabGroup>
        <TabList className={twMerge("flex w-full", currentVariant.list)}>
          {items.map(({ title, icon }) => (
            <Tab
              key={title}
              className={({ selected }) => currentVariant.tab(selected)}
            >
              {icon && <span className={variant === "underline" ? "" : "mx-auto"}>{icon}</span>}
              {title}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-2">
          {items.map(({ title, content }) => (
            <TabPanel key={title} className="focus:outline-none">
              {content}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

