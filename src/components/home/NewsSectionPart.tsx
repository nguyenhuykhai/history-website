"use client";
import { placeholder500x300 } from "@/assets/image";
import { formatDate } from "@/lib/utils";
import { NEWS_QUERYResult } from "@/sanity/types";
import Autoplay from "embla-carousel-autoplay";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Link } from "@/i18n/routing";

const NewsSectionPart = ({ newsData }: { newsData: NEWS_QUERYResult }) => {
  const [data, setData] = useState<NEWS_QUERYResult>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const itemsPerPage = 4;

  useEffect(() => {
    setData(newsData);
  }, [newsData]);

  if (!data || data.length === 0) return null;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="grid grid-cols-2 gap-6 mb-10 h-[410px]">
        {/* Main Article */}
        <div className="w-full">
          <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent>
              {currentItems.map((item) => (
                <CarouselItem key={item._id} className="cursor-pointer">
                  <Card className="h-full border-none rounded-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardDescription className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(item.createdAt)}
                        </p>
                        <Badge variant="outline">{item.category}</Badge>
                      </CardDescription>
                      <CardTitle>
                        <Link href={`/news/${item._id}`}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="text-justify leading-relaxed line-clamp-2">
                              <p>{item.title}</p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Tác giả: {item?.author?.name}
                        </p>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={item.image || placeholder500x300}
                        alt={item.title || "Article"}
                        width={1280}
                        height={700}
                        className="rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Side Articles */}
        <div className="flex flex-col justify-between h-full">
          {currentItems.slice(1).map((item, index) => (
            <div
              key={index}
              className="flex bg-white dark:bg-gray-800 p-3 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={item.image || placeholder500x300}
                alt={item.title || "Article"}
                width={800}
                height={800}
                className="w-24 h-24 object-cover mr-4 rounded"
              />
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(item.createdAt)}
                  </p>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tác giả: {item?.author?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-1 rounded ${
                currentPage === pageNumber
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default NewsSectionPart;
