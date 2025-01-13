"use client";
import dynamic from "next/dynamic";

const CulturalClient = dynamic(() => import("@/components/cultural/template/CulturalClient"), {
  loading: () => <div className="h-96 bg-gray-300 animate-pulse"></div>,
  ssr: false,
});

const Cultural = () => {  
  return (
    <>
      <CulturalClient />
    </>
  );
}

export default Cultural;