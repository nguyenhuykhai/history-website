"use client";
import CulturalCard from "@/components/cultural/organisms/CulturalCard";
import { Separator } from "@/components/ui/separator";
import { booksData } from "@/assets/data/Books_Data";
import { useTranslations } from "next-intl";
import { FlipText } from "@/components/magicui/flip-text";

export type booksData = {
  img: string;
  name: string;
  description: string;
  link: string;
};

const CulturalClient = () => {
  const t = useTranslations("Cultural");
  return (
    <>
      <section className="px-0 py-0 md:px-6 max-w-7xl mx-auto">
        <FlipText className="flex-text hidden lg:block">{t("title")}</FlipText>
        <h1 className="heading-secondary block lg:hidden">{t("title")}</h1>
        <p className="text-lg text-justify font-medium text-gray-900 dark:text-white mb-6">
          {t("content")}
        </p>
      </section>

      <Separator className="my-6" />

      <div className="card_grid_lg">
        {booksData.map((item: booksData, index) => (
          <CulturalCard key={index} item={item} t={t} />
        ))}
      </div>
    </>
  );
};

export default CulturalClient;
