"use client";
import React, { useEffect, useRef, useState } from "react";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CalendarDays } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Badge } from "../ui/badge";
import { formatDate } from "@/lib/utils";

interface News {
  title: string;
  slug: string;
  image: string;
  author: {
    name: string;
    title: string;
    _id: string;
  };
  category: string;
  createdAt: string;
  description: string;
}

const NewsSection = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const posts = await client.fetch(NEWS_QUERY);
      setNewsData(posts);
    };
    fetchData();
  }, []);

  if (!newsData || newsData.length === 0) return null;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold bg-red-800 dark:bg-red-900 text-white p-2 mb-4">
          HOẠT ĐỘNG NỔI BẬT
        </h2>

        <section className="grid grid-cols-2 gap-6 mb-10 h-[410px]">
          {/* Main Article */}
          <div className="w-full">
            <Carousel plugins={[plugin.current]} className="w-full">
              <CarouselContent>
                {currentItems.map((item, index) => (
                  <CarouselItem key={index} className="cursor-pointer">
                    <Card className="h-full border-none rounded-none shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardDescription className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(item.createdAt)}</p>
                          <Badge variant="outline">{item.category}</Badge>
                        </CardDescription>
                        <CardTitle>
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
                        </CardTitle>
                        <CardDescription>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Tác giả: {item.author.name}</p>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image 
                          src={item.image} 
                          alt={item.title} 
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
              <div key={index} className="flex bg-white dark:bg-gray-800 p-3 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="w-24 h-24 object-cover mr-4 rounded"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(item.createdAt)}</p>
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tác giả: {item.author.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
