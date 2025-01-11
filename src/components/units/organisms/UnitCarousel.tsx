"use client"
import { sliderOne, sliderTwo } from '@/assets/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React, { useRef } from 'react'

const UnitCarousel = () => {
    const images = [sliderOne, sliderTwo, sliderOne, sliderTwo];
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
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Image src={image} alt="slider" width={1280} height={700} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
}

export default UnitCarousel