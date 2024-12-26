import React from "react";
import { sliderOne, sliderTwo } from "../../../assets";

const BannerSection = () => {
  return (
    <section className="mb-8">
      <div id="gallery" class="relative w-full" data-carousel="slide">
        <div class="relative h-40 sm:h-96 md:h-[33rem] overflow-hidden rounded-lg">
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src={sliderOne}
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div
            class="hidden duration-1000 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={sliderTwo}
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
