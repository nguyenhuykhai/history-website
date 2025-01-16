import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/custom/header";
import { Navbar } from "@/components/custom/navbar";
import Sidebar from "@/components/custom/sidebar";
import Footer from "@/components/custom/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "vi" | "en" };
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider defaultTheme={theme} attribute="class">
          <NextIntlClientProvider messages={messages}>
            <Header />
            <Navbar />
            <main className="flex flex-col lg:flex-row gap-4 container mx-auto px-4 py-4 sm:py-6 lg:py-8 font-work-sans">
              {/* Mobile Layout (Sidebar above Routes) */}
              <div className="block lg:hidden mb-6">
                <Sidebar />
              </div>

              {/* Desktop Layout (Sidebar beside Routes) */}
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="w-full lg:flex-1">
                { children }
                </div>
              </div>

              {/* Desktop Sidebar */}
              <div className="hidden lg:block">
                <Sidebar />
              </div>
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
