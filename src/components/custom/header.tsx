"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations("Banner");
  return (
    <header
      className="relative bg-banner bg-cover bg-center h-36 sm:h-48 md:h-64 lg:h-72 flex items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="uppercase text-base sm:text-base md:text-3xl lg:text-3xl font-bold leading-tight">
          {t("textOne")}
        </h1>
        <p className="uppercase text-xs sm:text-xs md:text-xl lg:text-2xl py-1 sm:py-2 md:py-3">
          {t("textTwo")}
        </p>
        <p className="uppercase text-base sm:text-base md:text-2xl lg:text-3xl text-yellow-200 font-bold py-1 sm:py-2 md:py-3">
          {t("textThree")}
        </p>
      </div>
    </header>
  );
};

export default Header;
