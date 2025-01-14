"use client";
import React from "react";
import { historyData } from "@/assets/data/History_Data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const History = () => {
  const t = useTranslations("History");
  const linkDownLoadPdf =
    "https://firebasestorage.googleapis.com/v0/b/the-gioi-an-lac.appspot.com/o/tanxuan%2FLSDB%20xa%20Tan%20Xuan.pdf?alt=media&token=a43d8394-ed76-4e92-a015-a4a8adf86740";

  const handleOpenPdf = () => {
    window.open(linkDownLoadPdf, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="px-0 py-0 md:px-6 max-w-7xl mx-auto">
        <h1 className="heading-secondary">
          {t("title")}
        </h1>
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
        <Accordion type="single" collapsible>
          {historyData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors">
                {item.year}
              </AccordionTrigger>
              <AccordionContent>
                <div className="overflow-hidden">
                  <Card className="shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 mb-6 min-h-[150px]">
                    <CardHeader className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-t-lg flex items-center">
                      <CardTitle className="text-gray-900 dark:text-gray-100 flex-1">
                        {item.year}
                      </CardTitle>
                      <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                        ({t("note")})
                      </span>
                    </CardHeader>
                    <CardContent className="px-6 py-4">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-justify">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default History;