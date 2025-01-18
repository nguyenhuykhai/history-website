import React from "react";
import { render, screen } from "@testing-library/react";
import History, { metadata } from "@/app/[locale]/(root)/history/page";
import { expectedHistoryMetadata } from "@/__test__/__mocks__/mockData";

jest.mock("next/dynamic", () => () => {
  const HistoryClient = () => <div>HistoryClient Component</div>;
  return HistoryClient;
});

describe("History Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("renders the HistoryClient component", () => {
    render(<History />);
    expect(screen.getByText("HistoryClient Component")).toBeInTheDocument();
    expect(<History />).toMatchSnapshot();
  });

  it("has the correct metadata", () => {
    expect(metadata).toEqual(expectedHistoryMetadata);
  });
});
