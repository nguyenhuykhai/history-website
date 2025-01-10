// import { notFound } from "next/navigation";
import React from "react";

const UnitDetail = async ({ params } : { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  console.log("id: ", id);

  // const post = await fetch

  // if (!post) return notFound();

  return <div>page</div>;
};

export default UnitDetail;