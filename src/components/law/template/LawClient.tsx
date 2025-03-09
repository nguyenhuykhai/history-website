"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState } from "react";
import { FlipText } from "@/components/magicui/flip-text";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { reviews } from "@/assets/data/Law_Data";
import { useTranslations } from "next-intl";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  body,
  img,
  thumbnail,
}: {
  name: string;
  body: string;
  img: string[];
  thumbnail: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="max-w-xs mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition duration-300 hover:shadow-lg">
      <img
        src={thumbnail}
        alt="Thumbnail"
        className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
        onClick={() => setIsOpen(true)}
      />

      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <img className="rounded-full w-10 h-10" alt={name} src={img[0]} />
          <div className="flex flex-col">
            <HoverCard>
              <HoverCardTrigger>
                <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-lg line-clamp-1">
                  {name}
                </h2>
              </HoverCardTrigger>
              <HoverCardContent className="!text-xs">{name}</HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <HoverCard>
          <HoverCardTrigger>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
              {body}
            </p>
          </HoverCardTrigger>
          <HoverCardContent className="!text-xs">{body}</HoverCardContent>
        </HoverCard>

        {/* Dialog for Image Gallery */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
              {name}'s Images
            </h3>
            <Carousel className="w-full">
              <CarouselContent>
                {img.map((image, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default function LawClient() {
  const t = useTranslations("Law");
  return (
    <div className="relative flex flex-col items-center justify-center bg-white dark:bg-black px-4 md:px-6 lg:px-8">
      {/* FlipText Animated Title */}
      <div className="w-full max-w-screen-lg mx-auto my-6 text-center">
        <FlipText className="flex-text hidden lg:block">{t("title")}</FlipText>
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
}
