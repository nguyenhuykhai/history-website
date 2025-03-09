import { useState } from "react";
import { placeholder150 } from "@/assets/image";
import Image, { StaticImageData } from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface ExpandingCardProps {
  title: string;
  image: string | StaticImageData;
}

export default function ExpandingCard({ title, image }: ExpandingCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <Card className="max-w-xs mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
    //   <Dialog open={isOpen} onOpenChange={setIsOpen}>
    //     <DialogTrigger asChild>
    //       <div className="relative h-48 cursor-pointer" onClick={() => setIsOpen(true)}>
    //         <Image
    //           src={image || placeholder150}
    //           alt={title}
    //           layout="fill"
    //           objectFit="cover"
    //           className="rounded-t-lg"
    //         />
    //       </div>
    //     </DialogTrigger>

    //     <DialogContent className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
    //       <div className="flex justify-center">
    //         <Image
    //           src={image || placeholder150}
    //           alt={title}
    //           width={800}
    //           height={600}
    //           className="rounded-lg max-h-[90vh] object-contain"
    //         />
    //       </div>
    //     </DialogContent>
    //   </Dialog>

    //   <CardContent className="p-4">
    //     <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
    //       {title}
    //     </h2>
    //   </CardContent>
    // </Card>

    <Card>
      {/* Clickable Image - Opens Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
        <DialogContent className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
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
      <CardContent className="pt-0">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
          {title}
        </h2>
      </CardContent>
    </Card>
  );
}
