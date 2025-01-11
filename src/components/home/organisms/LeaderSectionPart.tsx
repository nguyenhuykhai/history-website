"use client";
import ListLeader from "@/components/home/molecules/ListLeader";
import { TERMS_QUERYResult } from "@/sanity/types";
import React, { useEffect, useState } from "react";

const LeaderSectionPart = ({ termsData } : { termsData: TERMS_QUERYResult }) => {
  const [data, setData] = useState<TERMS_QUERYResult>([]);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    setData(termsData);
  }, [termsData]);

  if (!data || data.length === 0) return null;

  const handleAccordion = (_id: string) => {
    if (activeAccordion === _id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(_id);
    }
  };

  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
    >
      {termsData.map(item => (
        <section key={item._id}>
          <h2 id={`accordion-color-heading-${item._id}`}>
            <button
              onClick={() => handleAccordion(item._id)}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-color-body-${item._id}`}
              aria-controls={`accordion-color-body-${item._id}`}
            >
              <span className="text-lg font-bold text-red-800 dark:text-white">
                {item.name}
              </span>
              {activeAccordion === item._id ? (
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              )}
            </button>
          </h2>
          <div
            id={`accordion-color-body-${item._id}`}
            className={`${activeAccordion === item._id ? "" : "hidden"}`}
            aria-labelledby={`accordion-color-heading-${item._id}`}
          >
            <ListLeader leaders={item?.data || []} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default LeaderSectionPart;
