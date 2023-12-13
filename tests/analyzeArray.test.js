import { expect, test } from "vitest";
import analyzeArray from "../modules/analyzeArray";

test("average", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).average).toBe(4);
});

test("min", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, -22]).min).toBe(-22);
});

test("max", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6]).max).toBe(6);
});

test("length", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

test("length - empty array", () => {
  expect(analyzeArray([]).length).toBe(0);
});
