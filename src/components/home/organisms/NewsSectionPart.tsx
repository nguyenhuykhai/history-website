"use client";
import { placeholder500x300 } from "@/assets/image";
import { formatDate } from "@/lib/utils";
import { NEWS_QUERYResult } from "@/sanity/types";
import Autoplay from "embla-carousel-autoplay";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "../../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { Link } from "@/i18n/routing";
import NewItem, { NewItemProps } from "@/components/home/molecules/NewItem";

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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 h-auto md:h-[410px]">
        {/* Main Article */}
        <div className="hidden md:block w-full">
          <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent>
              {currentItems.map((item) => (
                <CarouselItem key={item._id}>
                  <Card className="h-full border-none rounded-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardDescription className="flex justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {formatDate(item.createdAt)}
                          </p>
                        </div>
                        <Badge className="badge-primary" variant="outline">{item.category}</Badge>
                      </CardDescription>
                      <CardTitle>
                        <Link href={`/news/${item._id}`} className="cursor-pointer">
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
                        <p className="link-underlined">
                          Tác giả: {item?.author?.name}
                        </p>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="cursor-pointer">
                      <Link href={`/news/${item._id}`}>
                        <Image
                          src={item.image || placeholder500x300}
                          alt={item.title || "Article"}
                          width={1280}
                          height={700}
                          className="rounded-lg"
                        />
                    </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Side Articles */}
        <div className="flex flex-col gap-2 justify-between h-full">
          {currentItems.slice(1).map((item: NewItemProps, index) => (
            <NewItem key={index} item={item} />
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