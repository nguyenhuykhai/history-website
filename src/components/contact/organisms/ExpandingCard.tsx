"use client";
import { useState } from "react";
import { placeholder150 } from "@/assets/image";
import Image, { StaticImageData } from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import ShadCN Button

interface ExpandingCardProps {
  title: string;
  image: string | StaticImageData;
  t: (key: string) => string;
}

export default function ExpandingCard({ title, image, t }: ExpandingCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* Clickable Image */}
        <DialogTrigger asChild>
          <div
            className="relative h-48 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={image || placeholder150}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        </DialogTrigger>

        {/* Image Popup Dialog */}
        <DialogContent>
          <div className="flex justify-center">
            <Image
              src={image || placeholder150}
              alt={title}
              width={800}
              height={600}
              className="rounded-lg max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Card Content with Title and Button */}
      <CardContent className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
          {title}
        </h2>

        {/* View Full Image Button */}
        <Button
          onClick={() => setIsOpen(true)}
          className="mt-4 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
        >
          {t("button")}
        </Button>
      </CardContent>
    </Card>
  );
}
