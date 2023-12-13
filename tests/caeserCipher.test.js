import { expect, test } from "vitest";
import caesarCipher from "../modules/caeserCipher";

test("encrypted by shift factor", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});

test("wraparound a-z", () => {
  expect(caesarCipher("zzz", 1)).toBe("aaa");
});

test("wraparound A-Z", () => {
  expect(caesarCipher("zzZ", 2)).toBe("bbB");
});

test("wraparound A-Z, a-z", () => {
  expect(caesarCipher("zzZZ", 2)).toBe("bbBB");
});

test("preserve case", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test("handle no shift", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test("return empty string with no arguments", () => {
  expect(caesarCipher()).toBe("");
});

test("return same string if no shift is entered", () => {
  expect(caesarCipher("abc")).toBe("abc");
});

test("preserve punctuation", () => {
  expect(caesarCipher("ab-c", 1)).toBe("bc-d");
});
