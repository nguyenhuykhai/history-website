"use client";
import { Switch } from "@/components/ui/switch";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function LanguageToggle() {
  const t = useTranslations("Language");
  const pathname = usePathname();
  
  // Get current locale from URL path
  const currentLocale = pathname.split('/')[1];
  
  const toggleLanguage = () => {
    // Get the new locale
    const newLocale = currentLocale === 'en' ? 'vi' : 'en';
    
    // Construct the new URL
    const newUrl = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    
    // Reload the page with the new locale
    window.location.href = newUrl;
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">EN</span>
      <Switch
        checked={currentLocale === 'vi'}
        onCheckedChange={toggleLanguage}
        aria-label={t('switch_language')}
      />
      <span className="text-sm font-medium">VI</span>
    </div>
  );
}