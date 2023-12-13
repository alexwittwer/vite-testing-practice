import { expect, test } from "vitest";
import capitalize from "../modules/capitalize";

test("capitalizes first letter of a string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
