import { notFound } from "next/navigation";
import { mockTerms, mockNews, mockUnits } from "@/__test__/__mocks__/mockData";

/**
 * Mock function for fetchData.
 * Returns mock data instead of calling the actual API.
 */
export async function fetchData() {
  // Simulate fetching data by returning mock data
  const terms = mockTerms;
  const news = mockNews;
  const units = mockUnits;

  // Check if data is valid
  if (
    !terms ||
    !news ||
    !units ||
    terms.length === 0 ||
    news.length === 0 ||
    units.length === 0
  ) {
    return notFound();
  }

  return { terms, news, units };
}