"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
// import { ThemeToggle } from "@/app/components/layouts/customer/ThemeToggle";
import { usePathname } from "next/navigation";
import { routes } from "@/app/base/utils/constants";
import { Button, Typography } from "../common";

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
    name: "Blogs",
    path: routes.blogs,
  },
  {
    name: "Contact",
    path: routes.contactUs,
  },
  { name: "MT5 Platform", path: routes.metaTrader5Platform },

];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const isActive = (menuPath: string): boolean => menuPath == pathname;

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

        {/* Hamburger */}
        <div className=" flex items-center gap-10">
          <Button
            title="Login"
            variant="default"
          />
          <button
            className="text-3xl text-primary"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
            <Typography variant="bodyMediumBold">Menu</Typography>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 -mr-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <MdClose size={28} />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <Typography
                  variant="bodyMediumBold"
                  className={`${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  }`}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </div>

          {/* Sidebar Footer (Buttons) */}
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 space-y-3">
            <Link href={routes.login} onClick={() => setIsMenuOpen(false)} className="block">
              <Button
                title="Login"
                variant="outline"
                icon={<MdArrowOutward />}
                className="w-full"
              />
            </Link>
            <Link href={routes.signup} onClick={() => setIsMenuOpen(false)} className="block">
              <Button
                title="Signup"
                variant="black"
                icon={<MdArrowOutward />}
                className="w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
