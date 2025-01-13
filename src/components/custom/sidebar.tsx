"use client";
import Image from "next/image";
import TanXuanLogo from "../../assets/image/home-page/tan-xuan-logo.webp";
import Facebook from "../../assets/image/social/facebook.svg";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const t = useTranslations("Sidebar");

  return (
    <>
      <aside className="w-full sm:w-full lg:w-64 sticky top-10">
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-4">
          <div className="flex items-center gap-4">
            <Image
              className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-600"
              src={TanXuanLogo}
              alt="Tan Xuan Logo"
              width={100}
              height={100}
            />
            <div className="font-medium text-gray-900 dark:text-white">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {t("titleOne")}
              </div>
              <div>{t("titleTwo")}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 cursor-pointer">
            {/* Facebook */}
            <div
              onClick={() =>
                window.open("https://www.facebook.com/xadoantanxuan")
              }
            >
              <Image
                data-tooltip-target="tooltip-jese"
                className="w-10 h-10 rounded"
                src={Facebook}
                alt="Facebook"
                width={100}
                height={100}
              />
            </div>

            <div>
              <a
                onClick={() =>
                  window.open("https://www.facebook.com/xadoantanxuan")
                }
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
              >
                {t("facebook")}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
          <h3 className="uppercase font-bold text-red-800 dark:text-red-400 mb-2">
            {t("websites")}
          </h3>
          <select className="w-full border dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            <option>{t("select")}</option>
          </select>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
