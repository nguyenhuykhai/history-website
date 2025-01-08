import { useTranslations } from "next-intl";

export default function News() {
  const t = useTranslations("News");
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      {/* Add your news page content here */}
    </main>
  );
} 