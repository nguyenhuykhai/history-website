"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UNITS_QUERYResult } from "@/sanity/types";
import { placeholder500x300 } from "@/assets/image";
import { Link } from "@/i18n/routing";
import { img150x150 } from "@/assets/data/imgPlaceholder";

type OperationSectionProps = {
  units: UNITS_QUERYResult;
  t: (key: string) => string;
};

const OperationSection: React.FC<OperationSectionProps> = ({ units, t }) => {
  const [data, setData] = useState<UNITS_QUERYResult>([]);

  useEffect(() => {
    setData(units);
  }, [units]);

  if (!data || data.length === 0) return null;

  return (
    <section>
      <h2 className="uppercase text-xl font-bold bg-red-800 text-white p-2 mb-4">
        {t("sectionThree")}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item._id}>
            <Link href={`/chi-bo/${item?._id}`}>
              <Image
                placeholder="blur"
                blurDataURL={img150x150}
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
