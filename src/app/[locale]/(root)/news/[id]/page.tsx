import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { NEW_QUERY_BY_ID } from "@/sanity/lib/queries";
import markdownit from "markdown-it";
import { NEW_QUERY_BY_IDResult } from "@/sanity/types";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { placeholder150, placeholder500x300 } from "@/assets/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const md = markdownit();

const NewDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const data: NEW_QUERY_BY_IDResult = await client.fetch(NEW_QUERY_BY_ID, {
    id,
  });

  if (!data) return notFound();

  const parsedContent = md.render(data?.description || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(data?._createdAt)}</p>

        <h1 className="heading">{data.title}</h1>
      </section>

      <section className="section_container">
        <Image
          src={data.image || placeholder500x300}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
          width={700}
          height={400}
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${data.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={data?.author?.image || placeholder150}
                alt={data?.author?.name || "Author"}
                width={150}
                height={150}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{data?.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  {data.author?.title &&
                    data.author.title.map((title) => `${title} `)}
                </p>
              </div>
            </Link>

            <p className="category-tag">{data.category}</p>
          </div>

          <h3 className="text-30-bold">Chi tiết</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <hr className="divider" />

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          {/* <View id={id} /> */}
        </Suspense>
      </section>
    </>
  );
};

export default NewDetail;
