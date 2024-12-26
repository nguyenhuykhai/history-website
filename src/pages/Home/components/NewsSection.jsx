import React from "react";
import { newsItems } from "../../../data/mockNews";

const NewsSection = () => {
  return (
    <section className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">
          HOẠT ĐỘNG NỔI BẬT
        </h2>

        <section className="grid grid-cols-3 gap-6 mb-10">
          {/* Main Article */}
          <div className="col-span-2">
            <div
              className="relative h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsItems[0].image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-xl font-bold">{newsItems[0].title}</h3>
                <p className="text-sm">
                  {newsItems[0].category} - {newsItems[0].date}
                </p>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-4">
            {newsItems.slice(1).map((item, index) => (
              <div key={index} className="flex">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    {item.category} - {item.date}
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
