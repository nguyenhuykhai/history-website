"use client";
import { historyData } from "@/assets/data/History_Data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const HistoryAccordion = ({ t } : { t: (key: string) => string }) => {
  return (
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
  );
};

export default HistoryAccordion;
