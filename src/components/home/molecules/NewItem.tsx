"use client";
import { img150x150 } from "@/assets/data/imgPlaceholder";
import { placeholder500x300 } from "@/assets/image";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";
import { Slug } from "@/sanity/types";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import React from "react";

export type NewItemProps = {
  _id: string;
  slug: Slug | null;
  title: string | null;
  image: string | null;
  category: string | null;
  author: {
    name: string | null;
    _id: string;
    title: Array<string> | null;
  } | null;
  createdAt: string | null;
};

const NewItem = ({ item }: { item: NewItemProps }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 p-3 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/news/${item._id}`}>
        <div className="w-full md:w-24 h-auto md:h-24 mr-0 mb-2 md:mb-0 md:mr-4">
          <Image
            placeholder="blur"
            blurDataURL={img150x150}
            src={item.image || placeholder500x300}
            alt={item.title || "Article"}
            width={800}
            height={800}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 justify-between w-full">
        <div className="flex flex-row justify-between gap-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {formatDate(item.createdAt)}
            </p>
          </div>
          <Badge className="w-fit badge-primary" variant="outline">
            {item.category}
          </Badge>
        </div>
        <Link href={`/news/${item._id}`}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-justify line-clamp-2">
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                  {item.title}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <p className="link-underlined">Tác giả: {item?.author?.name}</p>
      </div>
    </div>
  );
};

export default NewItem;
