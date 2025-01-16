"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const ContactAccordion = ({ t } : { t: (key: string) => string }) => {
  return (
    <Accordion type="single" collapsible className="w-full mb-8">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors">
          {t("phoneLabel")}
        </AccordionTrigger>
        <AccordionContent className="text-lg text-gray-700 dark:text-gray-300">
          028.3891.0429
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors">
          {t("timeLabel")}
        </AccordionTrigger>
        <AccordionContent className="text-lg text-gray-700 dark:text-gray-300">
          {t("timeInfo")}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ContactAccordion;
