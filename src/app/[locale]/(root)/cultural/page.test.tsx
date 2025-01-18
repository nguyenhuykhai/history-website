import React from "react";
import { render, screen } from "@testing-library/react";
import Cultural, { metadata } from "@/app/[locale]/(root)/cultural/page";
import { expectedCulturalMetadata } from "@/__test__/__mocks__/mockData";

jest.mock("next/dynamic", () => () => {
  const CulturalClient = () => <div>CulturalClient Component</div>;
  return CulturalClient;
});

describe("Cultural Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("renders the CulturalClient component", () => {
    render(<Cultural />);
    expect(screen.getByText("CulturalClient Component")).toBeInTheDocument();
    expect(<Cultural />).toMatchSnapshot();
  });

  it("has the correct metadata", () => {
    expect(metadata).toEqual(expectedCulturalMetadata);
  });
});
