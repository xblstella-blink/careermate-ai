import { describe, expect, test } from "vitest";
import getEmailError from "./getEmailError";

describe("getEmailError", () => {
  test("returns error message when email is empty", () => {
    expect(getEmailError("")).toBe("Please enter your email");
  });
});
