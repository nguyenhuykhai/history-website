"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UNITS_QUERYResult } from "@/sanity/types";
import { placeholder500x300 } from "@/assets/image";
import { Link } from "@/i18n/routing";

const OperationSection = ({ units }: { units: UNITS_QUERYResult }) => {
  const [data, setData] = useState<UNITS_QUERYResult>([]);

  useEffect(() => {
    setData(units);
  }, [units]);

  if (!data || data.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">
        CÁC CHI BỘ TRỰC THUỘC
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item._id}>
            <Link href={`/about/${item?._id}`}>
              <Image
                className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-300"
                src={item.image || placeholder500x300}
                alt={item.name || "Image"}
                width={500}
                height={500}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OperationSection;
