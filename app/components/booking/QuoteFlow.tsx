"use client";

import React, { useState } from "react";
import { Typography } from "../common";
import { IoChevronForward } from "react-icons/io5";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MyInventory } from "./MyInventory";
import { UploadVideo } from "./UploadVideo";
import { Location } from "./Location";

interface Step {
  id: number;
  title: string;
}

const steps: Step[] = [
  { id: 1, title: "My Inventory" },
  { id: 2, title: "My Location" },
  { id: 3, title: "Personal Info" },
  { id: 4, title: "Compare" },
];

export const QuoteFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full container-booking my-12">
      {/* Stepper Header */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-8">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={twMerge(
                "flex items-center justify-between px-4 py-3 rounded-[6px] flex-1 min-w-[150px] cursor-pointer transition-all duration-300",
                isActive 
                  ? "bg-[#ECECED] shadow-sm border-b border-primary-light-300" 
                  : "bg-[#ECECED]/40 border border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <Typography
                  className={twMerge(
                    "font-regular",
                    isActive ? "text-navy" : "text-gray-400"
                  )}
                >
                  {step.title}
                </Typography>
              </div>
              
              <div className="flex items-center gap-2">
                <div
                  className={twMerge(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300",
                    isActive ? "bg-primary text-white" : "bg-primary/40 text-white/40"
                  )}
                >
                  {step.id}
                </div>
                <IoChevronForward 
                  className={twMerge(
                    "text-lg transition-colors duration-300",
                    isActive ? "text-navy" : "text-gray-300"
                  )} 
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div className=" ">
        {currentStep === 1 && (
          <div className="animate-fadeIn">
            {/* <MyInventory /> */}
            <UploadVideo/>
          </div>
        )}
        {currentStep === 2 && (
          <div className="animate-fadeIn">
           <Location/>
          </div>
        )}
        {currentStep === 3 && (
          <div className="animate-fadeIn">
            <Typography variant="h3" className="mb-4">Personal Info</Typography>
            <Typography>Content for Personal Info goes here...</Typography>
          </div>
        )}
        {currentStep === 4 && (
          <div className="animate-fadeIn">
            <Typography variant="h3" className="mb-4">Compare</Typography>
            <Typography>Content for Compare step goes here...</Typography>
          </div>
        )}
      </div>
    </div>
  );
};
