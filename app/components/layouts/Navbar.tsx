"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import { routes } from "@/app/base/utils/constants";
import { Button, Typography } from "../common";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

const navItems = [
  {
    name: "Home",
    path: routes.home,
  },
  {
    name: "About",
    path: routes.aboutUs,
  },
  {
    name: "Services",
    path: routes.services,
  },
  {
    name: "Contact",
    path: routes.contactUs,
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  const isActive = (menuPath: string): boolean => menuPath === pathname;

  return (
    <nav className="bg-navy py-4 z-50 relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Anngl Logo"
            width={214}
            height={84}
            className="w-[120px] md:w-[160px] md:h-[40px]"
          />
        </Link>

        {/* Desktop & Mobile Toggle */}
        <div className="flex items-center gap-5 md:gap-10">
          {!isLoggedIn ? (
            <div className="hidden sm:block" onClick={() => setIsLoggedIn(true)}>
              <Button title="Login" variant="default" />
            </div>
          ) : (
            <div className="flex items-center gap-x-4">
              <Image 
                src="/images/Avatar.svg" 
                alt="User Avatar" 
                width={40} 
                height={40} 
                className="w-[24px] h-[24px] rounded-full" 
              />
              <Typography className="text-white">User</Typography>
            </div>
          )}

          {/* Headless UI Menu for Hamburger */}
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <MenuButton
                  className="text-3xl text-primary flex items-center justify-center p-1 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {open ? <MdClose /> : <MdMenu />}
                </MenuButton>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-4 w-48 origin-top-right bg-navy focus:outline-none py-4 z-[70] rounded-[6px] ">
                    <div className="px-4 space-y-2">
                      {navItems.map((item) => (
                        <MenuItem key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.path}
                              className={`
                                group w-full items-center py-2 px-3 flex justify-between gap-x-2  border-b border-[#63818D]
                                ${active ? '' : ''} 
                                transition-colors 
                              `}
                            >
                              <Typography
                                className={ `${isActive(item.path) ? 'text-primary' : 'text-white hover:text-primary'}`}
                              >
                                {item.name}
                              </Typography>
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                      
                      {/* <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                        <MenuItem>
                          <Link href={routes.login} className="block">
                            <Button
                              title="Login"
                              variant="outline"
                              icon={<MdArrowOutward />}
                              className="w-full !h-[40px]"
                            />
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href={routes.signup} className="block">
                            <Button
                              title="Signup"
                              variant="black"
                              icon={<MdArrowOutward />}
                              className="w-full !h-[40px]"
                            />
                          </Link>
                        </MenuItem>
                      </div> */}
                    </div>
                  </MenuItems>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};
