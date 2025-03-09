import LoadingComponent from "@/components/custom/LoadingComponent";
import dynamic from "next/dynamic";

const LawClient = dynamic(() => import("@/components/law/template/LawClient"), {
  loading: () => <LoadingComponent />,
});

const History = () => {
  return (
    <>
      <LawClient />
    </>
  );
};

export default History;
