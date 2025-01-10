"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UNITS_QUERY } from "@/sanity/lib/queries";
import { Units } from "@/sanity/schemaTypes/units";
import { client } from "@/sanity/lib/client";

const OperationSection = () => {
  const [unitsData, setUnitsData] = useState<Array<Units>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: Array<Units> = await client.fetch(UNITS_QUERY);
      setUnitsData(result);
    };
    fetchData();
  }, []);

  if (!unitsData || unitsData.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">
        CÁC CHI BỘ TRỰC THUỘC
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {unitsData.map((unit: Units) => (
          <div key={unit._id}>
            <Image
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-300"
              src={unit.image}
              alt={unit.name}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OperationSection;
