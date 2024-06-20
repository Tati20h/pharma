import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Home } from "../../views/Home";

// Mock functions
jest.mock("../../services/api", () => ({
  getDataByName: jest.fn(),
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

jest.mock("../../components/tables/FilterData", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="test-filter">
      <p></p>
    </div>
  ),
}));

jest.mock("../../components/cards/OutlinedCard", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="test-outlined">
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

describe("Render Home Components no param name", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Home name={""} setName={jest.fn()} />);
  });

  it("should render Header correctly", () => {
    const headerSearch = screen.queryByTestId("test-header");
    expect(headerSearch).toBeInTheDocument();
  });

  it("should render Footer correctly", () => {
    const footerSearch = screen.queryByTestId("test-footer");
    expect(footerSearch).toBeInTheDocument();
  });

  it("Cant render Outlined", () => {
    const outlinedSearch = screen.queryByTestId("test-outlined");
    expect(outlinedSearch).not.toBeInTheDocument();
  });
  it("should render  correctly", () => {
    const filterSearch = screen.queryByTestId("test-filter");
    expect(filterSearch).toBeInTheDocument();
  });
});

describe("Render Home Components param name", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Home name={"test"} setName={jest.fn()} />);
  });

  it("should render Header correctly", () => {
    const headerSearch = screen.queryByTestId("test-header");
    expect(headerSearch).toBeInTheDocument();
  });

  it("should render Footer correctly", () => {
    const footerSearch = screen.queryByTestId("test-footer");
    expect(footerSearch).toBeInTheDocument();
  });

  it("Should  render Outlined", () => {
    const outlinedSearch = screen.queryByTestId("test-outlined");
    expect(outlinedSearch).toBeInTheDocument();
  });
  it("Cant render  correctly", () => {
    const filterSearch = screen.queryByTestId("test-filter");
    expect(filterSearch).not.toBeInTheDocument();
  });
});
