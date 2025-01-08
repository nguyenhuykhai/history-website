"use client";
import React from "react";
import ListLeader from "./ListLeader";
import { client } from "@/sanity/lib/client";
import { TERMS_QUERY } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";

const LeaderSection = () => {
  const [termsData, setTermsData] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await client.fetch(TERMS_QUERY);
      setTermsData(posts);
    };
    fetchData();
  }, []);

  if (!termsData || termsData.length === 0) return null;

  const handleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">
        BAN CHẤP HÀNH ĐẢNG BỘ XÃ QUA CÁC NHIỆM KỲ
      </h2>
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        {termsData.map((term: any) => (
          <section key={term._id}>
            <h2 id={`accordion-color-heading-${term._id}`}>
              <button
                onClick={() => handleAccordion(term._id)}
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target={`#accordion-color-body-${term._id}`}
                aria-controls={`accordion-color-body-${term._id}`}
              >
                <span className="text-lg font-bold text-red-800 dark:text-white">
                  {term.name}
                </span>
                {activeAccordion === term._id ? (
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
              id={`accordion-color-body-${term._id}`}
              className={`${activeAccordion === term._id ? "" : "hidden"}`}
              aria-labelledby={`accordion-color-heading-${term._id}`}
            >
              <ListLeader leaders={term.data} />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default LeaderSection;
