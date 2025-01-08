"use client";
import React, { useEffect, useRef, useState } from "react";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

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
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  useEffect(() => {
    const fetchData = async () => {
      const posts = await client.fetch(NEWS_QUERY);
      setNewsData(posts);
    };
    fetchData();
  }, []);

  if (!newsData || newsData.length === 0) return null;

  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold bg-red-800 dark:bg-red-900 text-white p-2 mb-4">
          HOẠT ĐỘNG NỔI BẬT
        </h2>

        <section className="grid grid-cols-2 gap-6 mb-10">
          {/* Main Article */}
          <div className="w-full">
            <Carousel plugins={[plugin.current]} className="w-full">
              <CarouselContent>
                {newsData.map((item, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardHeader>
                        <CardDescription>{item.createdAt}</CardDescription>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.author.name}</CardDescription>
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
          <div className="space-y-4">
            {newsData.slice(1).map((item, index) => (
              <div key={index} className="flex bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="w-24 h-24 object-cover mr-4 rounded"
                />
                <div>
                  <h4 className="font-semibold line-clamp-2 text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.category} - {item.createdAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default NewsSection;
