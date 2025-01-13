"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-red-800 text-white py-4 sm:py-5 lg:py-6 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-lg sm:text-xl font-bold mb-2">
          {t("title")}
        </h2>
        <p className="text-sm sm:text-base mb-1">{t("address")}</p>
        <p className="text-sm sm:text-base">{t("phone")}</p>
      </div>
    </footer>
  );
};

export default Footer;
