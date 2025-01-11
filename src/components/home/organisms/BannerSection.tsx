"use client"
import Image from "next/image";
import sliderOne from "@/assets/image/home-page/sliderOne.webp";
import sliderTwo from "@/assets/image/home-page/sliderTwo.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";

const BannerSection = () => {
  const images = [sliderOne, sliderTwo];
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt="slider" width={1280} height={700} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerSection;
