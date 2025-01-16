"use client";
import { Link } from "@/i18n/routing";
import { formatDateTime } from "@/lib/utils";
import { NEW_QUERY_BY_IDResult } from "@/sanity/types";
import { CalendarDays } from "lucide-react";
import React from "react";

type NewsClientProps = {
    data: NEW_QUERY_BY_IDResult;
    parsedContent: string;
}

const NewsClient: React.FC<NewsClientProps> = ({ data, parsedContent }) => {
  return (
    <>
      <section className="px-0 py-0 md:px-6 md:pt-10 max-w-7xl mx-auto !min-h-[150px]">
        <p className="tag-secondary">{data?.category}</p>
        <h1 className="heading-secondary">{data?.title}</h1>
      </section>

      <section className="p-0 md:px-6 max-w-7xl mx-auto">
        <div className="space-y-5 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${data?.author?._id}`}
              className="flex flex-col gap-2 mb-3"
            >
              <div className="flex gap-2 items-center">
                <CalendarDays className="w-5 h-5 text-black-100 dark:text-white-100" />
                <p className="tag-date">{formatDateTime(data?._createdAt)}</p>
              </div>
              <p className="text-20-medium">{data?.author?.name}</p>
              <p className="tag-date !font-medium !text-sm">
                {data?.author?.title &&
                  data?.author.title.map((title) => title).join(", ")}
              </p>
            </Link>
          </div>
          <hr className="divider" />

          {parsedContent ? (
            <article
              className="prose max-w-4xl text-justify font-work-sans"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <hr className="divider" />
      </section>
    </>
  );
};

export default NewsClient;
