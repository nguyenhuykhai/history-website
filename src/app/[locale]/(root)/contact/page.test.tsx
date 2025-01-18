import React from "react";
import { render, screen } from "@testing-library/react";
import Contact, { metadata } from "@/app/[locale]/(root)/contact/page";
import { expectedContactMetadata } from "@/__test__/__mocks__/mockData";

jest.mock("next/dynamic", () => () => {
  const ContactClient = () => <div>ContactClient Component</div>;
  return ContactClient;
});

describe("Contact Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("renders the ContactClient component", () => {
    render(<Contact />);
    expect(screen.getByText("ContactClient Component")).toBeInTheDocument();
    expect(<Contact />).toMatchSnapshot();
  });

  it("has the correct metadata", () => {
    expect(metadata).toEqual(expectedContactMetadata);
  });
});
