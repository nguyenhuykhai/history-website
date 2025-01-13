"use client";
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

const AboutCarousel = () => {
  const data = [
    {
      img: BCHQS,
      title: "Trụ sở Ban Chỉ huy Quân sự xã"
    },
    {
      img: biaTuongNiem,
      title: "Nhà bia ghi danh liệt sĩ trên địa bàn"
    },
    {
      img: chuaVanPhuoc,
      title: "Địa chỉ đỏ Chùa Vạn Phước"
    },
    {
      img: denThan,
      title: "Địa chỉ đỏ Đình thần Tân Thới Trung"
    },
    {
      img: nhaOngVoVanThu,
      title: "Địa chỉ đỏ nhà ông Võ Văn Thu"
    },
    {
      img: xaTanXuan,
      title: "Xã Tân Xuân"
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
                  src={item.img}
                  alt="slider"
                  width={1280}
                  height={700}
                  className="w-full h-auto object-fill"
                />
                <CardFooter className="flex justify-center text-center !pb-0 !pt-2">
                  <p className="text-sm text-black-100 italic dark:text-white">
                    {  item.title }
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
