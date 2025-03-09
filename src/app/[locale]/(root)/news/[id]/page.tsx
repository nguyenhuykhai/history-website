import LoadingComponent from "@/components/custom/LoadingComponent";
import { client } from "@/sanity/lib/client";
import { NEW_QUERY_BY_ID } from "@/sanity/lib/queries";
import { NEW_QUERY_BY_IDResult } from "@/sanity/types";
import markdownit from "markdown-it";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import logo from "@/assets/image/background/logo-doan-thanh-nien.webp";
import { placeholder500x300 } from "@/assets/image";

const NewsClient = dynamic(
  () => import("@/components/news/template/NewsClient"),
  {
    loading: () => <LoadingComponent />,
  }
);

const md = markdownit();

const NewDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const data: NEW_QUERY_BY_IDResult = await client.fetch(NEW_QUERY_BY_ID, {
    id,
  });

  if (!data || !data._id) return notFound();

  const parsedContent = md.render(data?.description || "");

  return (
    <>
      <head>
        <title>{data.title || "Tin tức - Đảng bộ xã Tân Xuân"}</title>
        <meta
          name="description"
          content={
            data.description ||
            "Cập nhật tin tức mới nhất từ Đảng bộ xã Tân Xuân."
          }
        />
        <link rel="icon" href={logo.src} />
        <meta
          property="og:title"
          content={data.title || "Tin tức - Đảng bộ xã Tân Xuân"}
        />
        <meta
          property="og:description"
          content={
            data.description ||
            "Cập nhật tin tức mới nhất từ Đảng bộ xã Tân Xuân."
          }
        />
        <meta
          property="og:url"
          content={`https://www.dangboxatanxuan.site/vi/news/${data.slug?.current || id}`}
        />
        <meta
          property="og:image"
          content={data.image || placeholder500x300.src}
        />
        <meta
          property="og:image:alt"
          content={data.title || "Tin tức - Đảng bộ xã Tân Xuân"}
        />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.dangboxatanxuan.site/vi/news/${data.slug?.current || id}`}
        />
      </head>
      <NewsClient data={data} parsedContent={parsedContent} />
    </>
  );
};

export default NewDetail;
