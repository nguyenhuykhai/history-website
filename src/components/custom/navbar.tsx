"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function Navbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // Get current locale from URL
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("news"), href: `/${locale}/news` },
    { name: t("services"), href: `/${locale}/services` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <nav className="bg-red-800">
      <div className="container mx-auto px-4">
        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center justify-end py-4">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="flex justify-between items-center">
          <ul className="hidden lg:flex items-center">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white px-4 py-3 block hover:bg-red-700 text-sm xl:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        <ul className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-white px-4 py-3 block hover:bg-red-700 border-b border-red-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 