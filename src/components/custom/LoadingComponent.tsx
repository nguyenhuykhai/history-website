"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingComponent = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto">
        <div className="card_grid_lg">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-[100px] w-[200px] rounded-xl mb-2" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadingComponent;
