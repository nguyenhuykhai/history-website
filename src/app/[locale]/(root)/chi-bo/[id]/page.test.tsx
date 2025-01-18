import React from "react";
import { render, screen } from "@testing-library/react";
import UnitDetail from "@/app/[locale]/(root)/chi-bo/[id]/page"; // Điều chỉnh đường dẫn nếu cần
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { mockUnits } from "@/__test__/__mocks__/mockData";

// Mock các dependencies
jest.mock("@/sanity/lib/client", () => ({
  client: {
    fetch: jest.fn(),
  },
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

jest.mock("next/dynamic", () => () => {
  const UnitsClient = () => <div>UnitsClient Component</div>;
  return UnitsClient;
});

describe("UnitDetail Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with valid unit data", async () => {
    // Mock fetch trả về dữ liệu hợp lệ
    (client.fetch as jest.Mock).mockResolvedValueOnce(mockUnits[0]);

    // Render component
    render(await UnitDetail({ params: Promise.resolve({ id: "1" }) }));

    // Kiểm tra xem UnitsClient có được render không
    expect(screen.getByText("UnitsClient Component")).toBeInTheDocument();
    expect(await UnitDetail({ params: Promise.resolve({ id: "1" }) })).toMatchSnapshot();
  });

  it("calls notFound when unit data is invalid", async () => {
    // Mock fetch trả về dữ liệu không hợp lệ
    (client.fetch as jest.Mock).mockResolvedValueOnce(null);

    // Render component
    await UnitDetail({ params: Promise.resolve({ id: "1" }) });

    // Kiểm tra xem notFound có được gọi không
    expect(notFound).toHaveBeenCalled();
  });

  it("calls notFound when unit name is missing", async () => {
    // Mock fetch trả về dữ liệu thiếu tên
    (client.fetch as jest.Mock).mockResolvedValueOnce({});

    // Render component
    await UnitDetail({ params: Promise.resolve({ id: "1" }) });

    // Kiểm tra xem notFound có được gọi không
    expect(notFound).toHaveBeenCalled();
  });
});