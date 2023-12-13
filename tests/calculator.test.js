import { expect, test } from "vitest";
import { calculate } from "../modules/calculate.js";

test("sum", () => {
  expect(calculate.sum(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(calculate.subtract(5, 4)).toBe(1);
});

test("multiply", () => {
  expect(calculate.multiply(3, 4)).toBe(12);
});

test("divide"),
  () => {
    expect(calculate.divide(6, 3)).toBe(2);
  };
