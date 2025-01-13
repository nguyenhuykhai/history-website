"use client";
import CulturalCard from "@/components/cultural/organisms/CulturalCard";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CulturalClient = () => {
  return (
    <>
      <section className="px-0 py-0 md:px-6 max-w-7xl mx-auto">
        <h1 className="heading-secondary !px-0">
          Không gian văn hóa Hồ Chí Minh
        </h1>
        <p className="text-lg text-justify font-medium text-gray-900 dark:text-white">
          &quot;Trân trọng giới thiệu những tác phẩm của Chủ tịch Hồ Chí Minh và
          những tác phẩm viết về Người, về cuộc đời, các quan điểm, lối sống,...
          mà mọi thế hệ người dân Việt Nam nên bảo tồn, lưu truyền và học
          tập&quot;
        </p>
      </section>

      <Separator className="my-6" />

      <div className="card_grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <CulturalCard key={index} />
        ))}
      </div>
    </>
  );
};

export default CulturalClient;
