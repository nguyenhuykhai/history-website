"use client";
import { usePathname, useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { useTranslations } from "next-intl";

export function LanguageToggle() {
  const t = useTranslations("Language");
  const router = useRouter();
  const pathname = usePathname();
  
  // Get current locale from URL path
  const currentLocale = pathname.split('/')[1];
  
  const toggleLanguage = () => {
    // Get the new locale
    const newLocale = currentLocale === 'en' ? 'vi' : 'en';
    
    // Get the path after the locale
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    
    // Navigate to the new path
    router.push(newPath);
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
