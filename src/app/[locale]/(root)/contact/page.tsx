import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      {/* Add your contact page content here */}
    </main>
  );
} 