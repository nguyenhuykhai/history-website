import React from "react";

const AchievementsSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Thành tựu</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Được công nhận là Xã Nông thôn Mới vào năm 2015.</li>
          <li>Được công nhận là Xã Nông thôn Mới Nâng cao vào năm 2020.</li>
          <li>
            Phát triển cơ sở hạ tầng đáng kể với hệ thống giao thông, trường
            học, và cấp nước hiện đại.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AchievementsSection;
