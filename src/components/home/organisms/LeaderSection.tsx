import LeaderSectionPart from "@/components/home/organisms/LeaderSectionPart";
import { TERMS_QUERYResult } from "@/sanity/types";

const LeaderSection = ({ terms } : { terms: TERMS_QUERYResult }) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">
        BAN CHẤP HÀNH ĐẢNG BỘ XÃ QUA CÁC NHIỆM KỲ
      </h2>
      { terms && terms.length > 0 ? (
        <LeaderSectionPart termsData={ terms } />
      ) : (
        <p className="text-center text-gray-500">No leaders available.</p>
      ) }
    </section>
  );
};

export default LeaderSection;
