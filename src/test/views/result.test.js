import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Result } from "../../views/Result";

// Mock functions
jest.mock("../../services/data", () => ({
  AdvertisingData: jest.fn(),
}));

jest.mock("../../components/Header", () => ({
  __esModule: true,
  default: ({ showSearch, name, setName }) => (
    <div>
      <input
        className="header_test"
        data-testid="test-header"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  ),
}));

jest.mock("../../components/cards/CardAdditionalData.jsx", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="test-Additional">
      <span></span>
    </div>
  ),
}));

jest.mock("../../components/Footer", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="test-footer">
      <p>This is my footer</p>
    </div>
  ),
}));

describe("Render Result Components", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Result name={""} setName={jest.fn()} />);
  });

  it("should render Header correctly", () => {
    const headerSearch = screen.queryByTestId("test-header");
    expect(headerSearch).toBeInTheDocument();
  });

  it("should render Footer correctly", () => {
    const footerSearch = screen.queryByTestId("test-footer");
    expect(footerSearch).toBeInTheDocument();
  });
  it("Should render Additional Search correctly", () => {
    const AdditionalSearch = screen.queryByTestId("test-Additional");
    expect(AdditionalSearch).toBeInTheDocument();
  });
});
