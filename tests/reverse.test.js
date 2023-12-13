import { expect, test } from "vitest";
import reverse from "./modules/reverse";

test("reverses a string", () => {
  expect(reverse("hello world")).toBe("dlrow olleh");
});

test("check white space preserved", () => {
  expect(reverse("hello world   ")).toBe("   dlrow olleh");
});

test("keeps punctuation", () => {
  expect(reverse("hello WorlD")).toBe("DlroW olleh");
});
