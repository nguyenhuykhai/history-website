"use client";
import { booksData } from "@/components/cultural/template/CulturalClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

type CulturalCardProps = {
  item: booksData;
  t: (key: string) => string;
}

const CulturalCard: React.FC<CulturalCardProps> = ({ item, t }) => {
  const handleNavigate = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <Card className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <Image
        src={item.img}
        alt={item.name}
        width={500}
        height={500}
        className="w-full h-64 object-cover object-center"
      />
      <CardContent className="p-4 flex flex-col justify-between">
        <div>
          <HoverCard>
            <HoverCardTrigger>
              <h2 className="text-gray-900 dark:text-gray-100 font-bold text-xl line-clamp-1">
                {item.name}
              </h2>
            </HoverCardTrigger>
            <HoverCardContent className="!text-xs">
              {item.name}
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                {item.description}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="!text-xs">
              {item.description}
            </HoverCardContent>
          </HoverCard>
        </div>
        <Button onClick={() => handleNavigate(item.link)} className="mt-4 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300">
          {t("btn")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CulturalCard;
