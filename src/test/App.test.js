import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const appDiv = screen.getByTestId("app-component");
  expect(appDiv).toHaveClass("App");
});
