import UnitsClient from "@/components/units/template/UnitsClient";
import { client } from "@/sanity/lib/client";
import { UNITS_QUERY_BY_ID } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

const UnitDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const unit = await client.fetch(UNITS_QUERY_BY_ID, { id });

  if (!unit) return notFound();

  return (
    <>
      <UnitsClient unit={unit} />
    </>
  );
};

export default UnitDetail;
