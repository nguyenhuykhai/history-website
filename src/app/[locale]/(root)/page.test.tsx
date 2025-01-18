import {
  expectedHomeMetadata,
  mockNews,
  mockTerms,
  mockUnits,
} from "@/__test__/__mocks__/mockData";
import Home, { metadata } from "@/app/[locale]/(root)/page";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

jest.mock("@/sanity/lib/client", () => ({
  client: {
    fetch: jest.fn(),
  },
}));

jest.mock("@/sanity/lib/live", () => ({
  defineLive: jest.fn(() => ({
    sanityFetch: jest.fn(),
    SanityLive: jest.fn(() => (
      <div data-testid="sanity-live">SanityLive Mock</div>
    )),
  })),
}));

describe("Home Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls notFound if terms data is missing", async () => {
    (client.fetch as jest.Mock)
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(mockNews)
      .mockResolvedValueOnce(mockUnits);

    await Home();

    expect(notFound).toHaveBeenCalled();
  });

  it("calls notFound if news data is missing", async () => {
    (client.fetch as jest.Mock)
      .mockResolvedValueOnce(mockTerms)
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(mockUnits);

    await Home();

    expect(notFound).toHaveBeenCalled();
  });

  it("calls notFound if units data is missing", async () => {
    (client.fetch as jest.Mock)
      .mockResolvedValueOnce(mockTerms)
      .mockResolvedValueOnce(mockNews)
      .mockResolvedValueOnce(null);

    await Home();

    expect(notFound).toHaveBeenCalled();
  });

  it("calls notFound if all data is missing", async () => {
    (client.fetch as jest.Mock)
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(null);

    await Home();

    expect(notFound).toHaveBeenCalled();
  });

  it("renders metadata correctly", () => {
    expect(metadata).toEqual(expectedHomeMetadata);
  });
});