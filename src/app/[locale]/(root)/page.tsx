import HomeClient from "@/components/home/template/HomeClient";
import { client } from "@/sanity/lib/client";
import { SanityLive } from "@/sanity/lib/live";
import { NEWS_QUERY, TERMS_QUERY, UNITS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function Home() {
  const [terms, news, units] = await Promise.all([
    client.fetch(TERMS_QUERY),
    client.fetch(NEWS_QUERY),
    client.fetch(UNITS_QUERY),
  ]);

  if (!terms || !news || !units) return notFound();

  return (
    <div>
      <HomeClient terms={terms} news={news} units={units} />
      <SanityLive />
    </div>
  );
}
