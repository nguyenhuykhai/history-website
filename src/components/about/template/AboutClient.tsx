"use client";
import { img150x150 } from "@/assets/data/imgPlaceholder";
import { tanXuanMap } from "@/assets/image";
import AboutCarousel from "@/components/about/organisms/AboutCarousel";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutClient = () => {
  const t = useTranslations("About");
  return (
    <div>
      <section>
        <h1 className="heading-secondary">{t("title")}</h1>
        <div className="container mx-auto px-0 md:px-4">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left: Image */}
            <div>
              <Image
                placeholder="blur"
                blurDataURL={img150x150}
                src={tanXuanMap}
                alt="Tân Xuân Landscape"
                className="rounded-lg shadow-lg"
                width={1280}
                height={700}
              />
            </div>

            {/* Right: Text */}
            <div>
              <p className="text-lg text-black dark:text-white leading-relaxed text-justify">
                {t("paragraphOne")}
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed text-justify mt-4">
                {t("paragraphTwo")}
              </p>
            </div>
          </div>

          {/* Landscape Section */}
          <div className="mb-12">
            <h1 className="heading-secondary">{t("scene")}</h1>
            <AboutCarousel t={t} />
          </div>

          {/* Google Map */}
          <div>
            <h1 className="heading-secondary">{t("map")}</h1>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClient;
