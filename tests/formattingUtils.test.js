import { objectToFormattedArray } from "../src/index.js";

describe("objectToFormattedArray", () => {
  test("should return a formatted array", () => {
    const input = { name: 2, text: 1, test: 4 };
    const expected = ["name: 2", "text: 1", "test: 4"];

    const received = objectToFormattedArray(input);

    expect(received).toEqual(expected);
  });

  test("should return an empty array", () => {
    const input = {};
    const expected = [];

    const received = objectToFormattedArray(input);

    expect(received).toEqual(expected);
  });
});
