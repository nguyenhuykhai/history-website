"use client";
import HistoryAccordion from "@/components/history/organisms/HistoryAccordion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

const HistoryClient = () => {
  const t = useTranslations("History");

  const linkDownLoadPdf =
    "https://firebasestorage.googleapis.com/v0/b/the-gioi-an-lac.appspot.com/o/tanxuan%2FLSDB%20xa%20Tan%20Xuan.pdf?alt=media&token=a43d8394-ed76-4e92-a015-a4a8adf86740";

  const handleOpenPdf = () => {
    window.open(linkDownLoadPdf, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="px-0 py-0 md:px-6 max-w-7xl mx-auto">
        <h1 className="heading-secondary">{t("title")}</h1>
        <p className="text-lg text-justify font-medium text-gray-900 dark:text-white mb-6">
          &quot;{t("description")}&quot;
        </p>
        <div className="flex justify-start mb-10">
          <Button
            onClick={handleOpenPdf}
            aria-label="Xem toàn bộ tài liệu"
            className="bg-primary text-white hover:bg-primary-900 transition duration-300 px-6 py-3 rounded-lg"
          >
            {t("btn")}
          </Button>
        </div>
      </section>
      <div className="px-0 py-0 md:px-6 max-w-7xl mx-auto">
        <HistoryAccordion t={t}/>
      </div>
    </>
  );
};

export default HistoryClient;
