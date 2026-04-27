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
}

export const Tabs = ({ items, className }: TabsProps): React.ReactElement => {
  return (
    <div className={twMerge("w-full", className)}>
      <TabGroup>
        <TabList className="flex w-full gap-2 sm:gap-3">
          {items.map(({ title, icon }) => (
            <Tab
              key={title}
              className={({ selected }) =>
                twMerge(
                  "py-4 px-8 text-[14px] sm:text-sm font-regular flex flex-col justify-center font-sf-pro items-center gap-y-2 leading-5 border transition-all duration-300 outline-none cursor-pointer rounded-[6px] flex-1 overflow-hidden",
                  selected
                    ? "bg-primary text-white border-primary shadow-lg scale-105 z-10"
                    : "border-white text-white hover:bg-white/10"
                )
              }
            >
              {icon && <span className="mx-auto">{icon}</span>}
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
