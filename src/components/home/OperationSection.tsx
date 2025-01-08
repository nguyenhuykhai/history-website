import React from "react";
import placeholder500x300 from "../../assets/image/placeholder/placeholder500x300.webp";
import Image from "next/image";

const OperationSection = () => {
  return (
    <section>
      <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">
        BAN CHẤP HÀNH ĐẢNG BỘ XÃ QUA CÁC NHIỆM KỲ
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={placeholder500x300}
              alt=""
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OperationSection;
