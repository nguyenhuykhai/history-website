"use client";

import { Link } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    { name: t("home"), href: `/` },
    { name: t("about"), href: `/about` },
    { name: t("news"), href: `/news` },
    { name: t("services"), href: `/services` },
    { name: t("contact"), href: `/contact` },
    {
      name: t("language"),
      href: `/`,
      render: (
        <div className="text-white px-4 py-3 block hover:bg-red-700 border-b border-red-700">
          <span className="flex items-center gap-2">
            {t("language")} <LanguageToggle />
          </span>
        </div>
      ),
    },
    {
      name: t("theme"),
      href: `/`,
      render: (
        <div className="text-white px-4 py-3 block hover:bg-red-700 border-b border-red-700">
          <span className="flex items-center gap-2">
            {t("theme")} <ThemeToggle />
          </span>
        </div>
      ),
    },
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
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-white px-4 py-3 block hover:bg-red-700 text-sm xl:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        <ul className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          {navigation.map((item, index) => (
            <li key={index}>
              {item.render ? (
                item.render
              ) : (
                <Link
                  href={item.href}
                  className="text-white px-4 py-3 block hover:bg-red-700 border-b border-red-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
