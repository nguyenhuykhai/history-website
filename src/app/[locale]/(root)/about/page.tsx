"use client";
import dynamic from "next/dynamic";

const AboutClient = dynamic(() => import("@/components/about/template/AboutClient"), {
  loading: () => <div className="h-96 bg-gray-300 animate-pulse"></div>,
  ssr: false,
});

const About = () => {
  return (
    <>
      <AboutClient />
    </>
  );
};

export default About;
