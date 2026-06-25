import { renderHook } from "@testing-library/react";
import useForm from "./useForm";
import { describe, expect, test, vi } from "vitest";
import { act } from "react";
import { z } from "zod";

const usernameSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

describe("useForm", () => {
  test("updates data on change", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        schema: usernameSchema,
      }),
    );
    expect(result.current.data.username).toBe("");

    act(() => {
      result.current.onChange("username")({ target: { value: "test" } });
    });

    expect(result.current.data.username).toBe("test");
  });

  test("validates data", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        schema: usernameSchema,
      }),
    );
    expect(result.current.error.username).toBe("Username is required");

    act(() => {
      result.current.onChange("username")({ target: { value: "test" } });
    });
    expect(result.current.error.username).toBeUndefined();
  });

  test("handles form submit with error", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        schema: usernameSchema,
      }),
    );
    expect(result.current.isSubmitted).toBe(false);

    const handleSubmit = vi.fn();

    act(() => {
      result.current.onSubmit(handleSubmit)({ preventDefault: () => {} });
    });
    expect(result.current.isSubmitted).toBe(true);
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test("handles form submit without error", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        schema: usernameSchema,
      }),
    );
    act(() => {
      result.current.onChange("username")({ target: { value: "test" } });
    });
    const handleSubmit = vi.fn();

    act(() => {
      result.current.onSubmit(handleSubmit)({ preventDefault: () => {} });
    });
    expect(handleSubmit).toHaveBeenCalled();
  });
});
