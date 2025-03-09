"use client";
import { hamlets } from "@/assets/data/Hamlet_Data";
import { placeholder800x800 } from "@/assets/image";
import ContactAccordion from "@/components/contact/organisms/ContactAccordion";
import ExpandingCard from "@/components/contact/organisms/ExpandingCard";
import { FlipText } from "@/components/magicui/flip-text";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import React from "react";

const ContactClient = () => {
  const t = useTranslations("Contact");

  return (
    <>
      <main className="section_container !px-0 !pt-0">
        <FlipText className="flip-text hidden lg:block">{t("title")}</FlipText>
        <h1 className="heading-secondary text-justify block lg:hidden">
          {t("title")}
        </h1>
        <p className="text-lg text-justify md:text-center font-medium text-gray-900 dark:text-white mb-6">
          {t("description")}
        </p>
        <Separator className="mb-10" />

        {/* Address Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4">
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {t("addressLabel")}:
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("addressInfo")}
            </p>
          </div>
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18435.232244877014!2d106.59167498747252!3d10.867944388783457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a6e0addb773%3A0xea74053f886ee25f!2zeMOjIFTDom4gWHXDom4sIEjDs2MgTcO0biwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1735209952219!5m2!1svi!2s"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </section>

        {/* Contact Information Accordion */}
        <ContactAccordion t={t} />

        <FlipText className="flip-text hidden lg:block">
          {t("hamlets")}
        </FlipText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hamlets.map((item, index) => (
            <ExpandingCard
              key={index}
              title={item.name}
              image={item.image}
              t={t}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default ContactClient;
