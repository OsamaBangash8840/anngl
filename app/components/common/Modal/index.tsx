"use client";

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment } from "react";
import { FiX } from "react-icons/fi";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title: string;
  paddingClass?: string;
  position?: "center" | "left" | "right";
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  title,
  paddingClass = "p-6",
  position = "center",
}: IModal): React.ReactElement => {
  // Position classes for the container (responsive - mobile first, then desktop)
  const positionClasses = {
    center: "flex min-h-full items-center justify-center p-4 text-center",
    left: "flex min-h-full items-center justify-center p-3 md:items-start md:justify-start md:pl-[280px] md:pt-20 md:pr-4 md:pb-4",
    right: "flex min-h-full items-center justify-center p-3 md:items-start md:justify-end md:p-4 md:pt-20",
  };

  // Animation classes based on position
  const enterFromClasses = {
    center: "opacity-0 scale-95",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
  };

  const enterToClasses = {
    center: "opacity-100 scale-100",
    left: "opacity-100 translate-x-0",
    right: "opacity-100 translate-x-0",
  };

  const leaveFromClasses = {
    center: "opacity-100 scale-100",
    left: "opacity-100 translate-x-0",
    right: "opacity-100 translate-x-0",
  };

  const leaveToClasses = {
    center: "opacity-0 scale-95",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className={positionClasses[position]}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom={enterFromClasses[position]}
              enterTo={enterToClasses[position]}
              leave="ease-in duration-200"
              leaveFrom={leaveFromClasses[position]}
              leaveTo={leaveToClasses[position]}
            >
              <DialogPanel
                className={`${className} w-full transform overflow-hidden rounded-xl bg-white dark:bg-gray-800 ${paddingClass} text-left align-middle shadow-xl transition-all`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  {/* <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={onClose}
                  >
                    <FiX size={20} />
                  </button> */}
                </div>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
