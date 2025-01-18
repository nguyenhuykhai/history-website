"use client";
import LeaderSectionPart from "@/components/home/organisms/LeaderSectionPart";
import { TERMS_QUERYResult } from "@/sanity/types";

type LeaderSectionProps = {
  terms: TERMS_QUERYResult;
  t: (key: string) => string;
}

const LeaderSection: React.FC<LeaderSectionProps> = ({ terms, t }) => {
  return (
    <>
      <section className="mb-10">
        <h2 className="uppercase text-xl font-bold bg-red-800 text-white p-2 mb-4">
          {t("sectionTwo")}
        </h2>
        {terms && terms.length > 0 ? (
          <LeaderSectionPart termsData={terms} />
        ) : (
          <p className="text-center text-gray-500">No leaders available.</p>
        )}
      </section>
    </>
  );
};

export default LeaderSection;
