import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import Field from "./Field";

describe("Field", () => {
  test("renders label and input", () => {
    render(
      <Field
        label="Email"
        value="alice@email.com"
        placeholder="Please type your email"
        type="text"
      />,
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
      "type",
      "text",
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
      "placeholder",
      "Please type your email",
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
      "value",
      "alice@email.com",
    );
  });
});
