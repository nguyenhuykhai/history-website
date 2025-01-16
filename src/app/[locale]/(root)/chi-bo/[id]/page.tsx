
import { client } from "@/sanity/lib/client";
import { UNITS_QUERY_BY_ID } from "@/sanity/lib/queries";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import logo from "@/assets/image/background/co-dang.webp";
import LoadingComponent from "@/components/custom/LoadingComponent";

const UnitsClient = dynamic(
  () => import("@/components/units/template/UnitsClient"),
  {
    loading: () => <LoadingComponent />,
  }
);

const UnitDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const unit = await client.fetch(UNITS_QUERY_BY_ID, { id });

  if (!unit || !unit.name) return notFound();

  return (
    <>
      <head>
        <title>{`Thông tin chi tiết ${unit?.name} - Đảng bộ xã Tân Xuân`}</title>
        <meta
          name="description"
          content={`Tìm hiểu chi tiết về ${unit?.name}, thuộc Đảng bộ xã Tân Xuân. Cập nhật thông tin hoạt động, thành tích và ban lãnh đạo chi bộ.`}
        />
        <link rel="icon" href={logo.src} />
        <meta
          property="og:title"
          content={`Thông tin chi tiết ${unit?.name} - Đảng bộ xã Tân Xuân`}
        />
        <meta
          property="og:description"
          content={`Tìm hiểu chi tiết về ${unit?.name}, thuộc Đảng bộ xã Tân Xuân. Cập nhật thông tin hoạt động, thành tích và ban lãnh đạo chi bộ.`}
        />
        <meta
          property="og:url"
          content={`https://www.dangboxatanxuan.site/vi/units/${encodeURIComponent(
            unit.name
          )}`}
        />
        <meta property="og:site_name" content="Đảng bộ xã Tân Xuân" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.dangboxatanxuan.site/vi/units/${encodeURIComponent(
            unit.name
          )}`}
        />
      </head>
      <UnitsClient unit={unit} />
    </>
  );
};

export default UnitDetail;