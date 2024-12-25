import React from "react";
import { leaders } from "../data/mockLeaders";

const LeaderSection = () => {
  return (
    <section>
      <h3 className="text-lg font-bold text-red-800 mb-6">Ban chấp hành Đảng bộ xã nhiệm kỳ 2020 - 2025</h3>
      <div className="grid grid-cols-4 gap-6">
        {leaders.map((leader, index) => (
          <div key={index} className="text-center">
            <img src={leader.image} alt={leader.name} className="w-24 h-24 mx-auto rounded-full" />
            <h4 className="font-bold mt-2">{leader.title}</h4>
            <p className="text-sm text-gray-600">{leader.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderSection;
