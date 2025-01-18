import React from "react";
import { render, screen } from "@testing-library/react";
import About, { metadata } from "@/app/[locale]/(root)/about/page";
import { expectedAboutMetadata } from "@/__test__/__mocks__/mockData";

jest.mock("next/dynamic", () => () => {
  const AboutClient = () => <div>AboutClient Component</div>;
  return AboutClient;
});

describe("About Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("renders the AboutClient component", () => {
    render(<About />);
    expect(screen.getByText("AboutClient Component")).toBeInTheDocument();
    expect(<About />).toMatchSnapshot();
  });

  it("has the correct metadata", () => {
    expect(metadata).toEqual(expectedAboutMetadata);
  });
});
