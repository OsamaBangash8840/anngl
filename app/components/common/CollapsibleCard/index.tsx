"use client";

import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../shadCn/collapsible";
import { LuChevronDown } from "react-icons/lu";
import { Typography } from "../Typography";
import { cn } from "@/lib/utils";

interface CollapsibleCardProps {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  count?: number;
  className?: string;
  defaultOpen?: boolean;
}

export const CollapsibleCard = ({
  title,
  children,
  icon,
  count,
  className,
  defaultOpen = false,
}: CollapsibleCardProps) => {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className={cn(
        "group w-full rounded-sm border border-[#C8D5D9] bg-white transition-all duration-300 hover:border-steel-light-300 group-data-[state=open]:rounded-sm ",
        className
      )}
    >
      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between p-4 transition-all duration-300 focus:outline-none md:py-3 md:px-5 data-[state=open]:bg-[#63818D] data-[state=open]:text-white">
        <div className="flex items-center gap-3">
          <div className=" flex items-center gap-1">
          {icon && <div className="text-primary group-data-[state=open]:text-white">{icon}</div>}
          <Typography className="text-navy transition-colors duration-300 group-data-[state=open]:text-white">
            {title}
          </Typography>
          </div>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white transition-all duration-300 group-data-[state=open]:bg-white group-data-[state=open]:text-primary">
          <Typography className="text-inherit">{count}</Typography>
        </div>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {children && (
          <div className="bg-white p-4 pt-0 md:p-5 md:pt-0">
            <div className="mt-4 !text-navy px-6">
              {children}
            </div>
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};
