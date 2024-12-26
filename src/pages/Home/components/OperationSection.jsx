import React from "react";
import { placeholder500x300 } from "../../../assets";

const OperationSection = () => {
  return (
    <section>
      <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">
        BAN CHẤP HÀNH ĐẢNG BỘ XÃ QUA CÁC NHIỆM KỲ
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={placeholder500x300}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OperationSection;
