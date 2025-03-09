"use client";

import { Marquee } from "@/components/magicui/marquee";
import { reviews } from "@/assets/data/Law_Data";
import { useTranslations } from "next-intl";
import { FlipText } from "@/components/magicui/flip-text";

import React from "react";
import ReviewCard from "@/components/law/organisms/ReviewCard";

const LawClient = () => {
  const t = useTranslations("Law");
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div className="relative flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      {/* FlipText Animated Title */}
      <div className="w-full max-w-screen-lg mx-auto my-6 text-center">
        <FlipText className="flip-text hidden lg:block">{t("title")}</FlipText>
        <h1 className="heading-secondary text-justify block lg:hidden">
          {t("title")}
        </h1>
        <p className="text-lg text-justify md:text-center font-medium text-gray-900 dark:text-white mb-6">
          {t("description")}
        </p>
      </div>

      {/* Marquee with Review Cards */}
      <div className="w-full max-w-screen-lg mx-auto">
        <Marquee pauseOnHover className="[--duration:20s] w-full">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LawClient;
