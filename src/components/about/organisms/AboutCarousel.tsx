"use client";
import { img150x150 } from "@/assets/data/imgPlaceholder";
import {
  BCHQS,
  biaTuongNiem,
  chuaVanPhuoc,
  denThan,
  nhaOngVoVanThu,
  xaTanXuan,
} from "@/assets/image";
import { Card, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

const AboutCarousel = ({ t }: { t: (key: string) => string }) => {
  const data = [
    {
      img: BCHQS,
      title: t("BCHQS"),
    },
    {
      img: biaTuongNiem,
      title: t("biaTuongNiem"),
    },
    {
      img: chuaVanPhuoc,
      title: t("chuaVanPhuoc"),
    },
    {
      img: denThan,
      title: t("denThan"),
    },
    {
      img: nhaOngVoVanThu,
      title: t("nhaOngVoVanThu"),
    },
    {
      img: xaTanXuan,
      title: t("xaTanXuan"),
    },
  ];
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <>
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="w-full h-56 object-fill shadow-sm rounded-lg p-2">
                <Image
                  placeholder="blur"
                  blurDataURL={img150x150}
                  src={item.img}
                  alt="slider"
                  width={1280}
                  height={700}
                  className="w-full h-auto object-fill"
                />
                <CardFooter className="flex justify-center text-center !pb-0 !pt-2">
                  <p className="text-sm text-black-100 italic dark:text-white">
                    {item.title}
                  </p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default AboutCarousel;
