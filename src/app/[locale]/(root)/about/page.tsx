import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      {/* Add your about page content here */}
    </main>
  );
} 