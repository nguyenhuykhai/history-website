import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <main className="section_container !px-0 !pt-0">
      <h1 className="heading-secondary">{t("title")}</h1>
      <p className="text-lg text-justify font-medium text-gray-900 dark:text-white mb-6">
        &quot;{t("description")}&quot;
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
    </main>
  );
}
