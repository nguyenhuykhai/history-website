"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

type UnitCarouselProps = {
  culture: Array<string> | null | undefined;
  t: (key: string) => string;
};

const UnitCarousel: React.FC<UnitCarouselProps> = ({ culture, t }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <>
      {culture && !culture.includes("") ? (
        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent>
            {culture.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src={image}
                  alt="slider"
                  width={1280}
                  height={700}
                  className="w-full h-60 object-fill"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <p className="text-justify text-lg text-black dark:text-white">
          {t("noData")}
        </p>
      )}
    </>
  );
};

export default UnitCarousel;
