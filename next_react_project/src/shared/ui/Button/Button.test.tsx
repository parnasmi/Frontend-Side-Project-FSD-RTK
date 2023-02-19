import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button component", () => {
  test("test Button to be correctly rendered", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("test Button has clear class", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
