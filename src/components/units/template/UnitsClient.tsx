"use client";
import { img150x150 } from "@/assets/data/imgPlaceholder";
import { placeholder500x300 } from "@/assets/image";
import Member, { MembersProps } from "@/components/units/organisms/Member";
import UnitCarousel from "@/components/units/organisms/UnitCarousel";
import { sortMembers } from "@/lib/utils";
import { UNITS_QUERY_BY_IDResult } from "@/sanity/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const UnitsClient = ({ unit }: { unit: UNITS_QUERY_BY_IDResult }) => {
  const t = useTranslations("Units");
  return (
    <>
      <section className="section_container !px-0 !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image
              placeholder="blur"
              blurDataURL={img150x150}
              src={unit?.image || placeholder500x300}
              alt={unit?.name || "background"}
              width={1280}
              height={700}
            />
          </div>
          <div>
            <h1 className="heading-secondary">{unit?.name}</h1>
            <p className="sub-heading !text-base !text-justify">
              {unit?.description}
            </p>
          </div>
        </div>
      </section>

      <h2 className="py-3 uppercase font-bold text-black dark:text-white-100 text-2xl leading-normal">
        {t("title")}
      </h2>
      <UnitCarousel culture={unit?.culture} t={t} />

      <h2 className="py-3 uppercase font-bold text-black dark:text-white-100 text-2xl leading-normal">
        {t("list")}
      </h2>
      <ul className="card_grid-sm">
        {unit?.members &&
          unit.members.length > 0 &&
          sortMembers(unit.members).map((member: MembersProps) => (
            <Member key={member._id} member={member} />
          ))}
      </ul>
    </>
  );
};

export default UnitsClient;
