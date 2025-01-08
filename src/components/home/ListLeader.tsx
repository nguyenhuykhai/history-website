import Image from "next/image";
import React from "react";

const ListLeader = ({ leaders }: any) => {
  if (!leaders || leaders.length === 0) {
    return <p className="text-center text-gray-500">No leaders available.</p>;
  }
  return (
    <div className="grid grid-cols-5 gap-6 my-4">
      {leaders.map((leader: any, index: number) => (
        <div key={leader._id} className="text-center">
          <Image
            src={leader.image}
            alt={leader.name}
            width={150}
            height={150}
            className="w-20 h-20 mx-auto rounded-full mb-1"
          />
          <cite className="font-medium text-gray-900 dark:text-white">
            {leader.name}
          </cite>
          <ul>
            {leader.title.map((item: any, titleIndex: number) => (
              <li key={titleIndex}>
                <cite className="ps-3 text-xs text-gray-500 dark:text-gray-400">
                  {item}
                </cite>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListLeader;
