import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a gauge", () => {
  render(<App />);
  const gaugeElement = screen.getByText("Speed");
  expect(gaugeElement).toBeInTheDocument();
});
