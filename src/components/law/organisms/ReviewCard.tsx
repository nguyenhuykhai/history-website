import { img150x150 } from "@/assets/data/imgPlaceholder";
import { logoDoanThanhNien, placeholder150 } from "@/assets/image";
import { FlipText } from "@/components/magicui/flip-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({
  name,
  description,
  img,
  thumbnail,
}: {
  name: string;
  description: string;
  img: string[];
  thumbnail: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="max-w-xs mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition duration-300 hover:shadow-lg z-10">
      <Image
        placeholder="blur"
        blurDataURL={img150x150}
        src={thumbnail || placeholder150}
        alt="Thumbnail"
        width={1280}
        height={700}
        className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
        onClick={() => setIsOpen(true)}
      />

      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Image
            placeholder="blur"
            src={logoDoanThanhNien}
            alt="logo"
            width={800}
            height={800}
            className="rounded-full w-10 h-10"
          />
          <div className="flex flex-col">
            <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-lg line-clamp-1">
              {name}
            </h2>
          </div>
        </div>

        <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
          {description}
        </p>

        {/* Dialog for Image Gallery */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            {/* Title in the Dialog */}
            <FlipText className="flip-text-2 hidden lg:block">{name}</FlipText>
            <h1 className="heading-secondary text-justify block lg:hidden">
              {name}
            </h1>

            {/* Description in the Dialog */}
            <p className="font-work-sans text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
              {description}
            </p>

            {/* Carousel of Images */}
            <Carousel className="w-full mt-4">
              <CarouselContent>
                {img.map((image, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <Image
                      placeholder="blur"
                      blurDataURL={img150x150}
                      src={image || placeholder150}
                      alt={name}
                      width={1280}
                      height={700}
                      className="w-full h-96 object-contain rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
