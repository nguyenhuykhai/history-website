import React from "react";

const ListLeader = ({ leaders }) => {
  if (!leaders || leaders.length === 0) {
    return <p className="text-center text-gray-500">No leaders available.</p>;
  }
  return (
    <div className="grid grid-cols-5 gap-6 my-4">
      {leaders.map((leader, index) => (
        <div key={index} className="text-center">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-20 h-20 mx-auto rounded-full mb-1"
          />
          <cite className="font-medium text-gray-900 dark:text-white">
            {leader.name}
          </cite>
          <ul>
            {leader.title.map((title, titleIndex) => (
              <li key={titleIndex}>
                <cite className="ps-3 text-xs text-gray-500 dark:text-gray-400">
                  {title}
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
