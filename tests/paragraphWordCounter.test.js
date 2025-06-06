import {
  countRepeatedWordsInParagraphs,
  extractParagraphs,
  verifyRepeatedWords,
} from "../src/index.js";
import { readFile } from "./fixtures/readFile.js";

const fileContentText = readFile("sample-text");
const fileContentParagraph = readFile("sample-paragraph");

describe("countRepeatedWordsInParagraphs", () => {
  test("should return an array of objects with repeated words in the text paragraphs", () => {
    const input = countRepeatedWordsInParagraphs(fileContentText);
    const expected = [{ lorem: 2, sit: 2 }, {}, { donec: 3 }];

    expect(input).toStrictEqual(expected);
  });

  test("should return an empty array for empty input", () => {
    const input = countRepeatedWordsInParagraphs("");
    const expected = [];

    expect(input).toStrictEqual(expected);
  });
});

describe("extractParagraphs", () => {
  test("should return an array with paragraphs in lowercase letters", () => {
    const input = extractParagraphs(fileContentText);
    const expected = [
      "lorem ipsum dolor, sit amet. lorem sit.",
      "",
      "consectetur, adipiscing elit, fusce accumsan, condimentum lectus eu commodo. ",
      "donec, dônec. donec donec donéc.",
    ];

    expect(input).toStrictEqual(expected);
  });

  test("should return empty array when receive an empty text", () => {
    const input = extractParagraphs('');
    const expected = ['']
    
    expect(input).toStrictEqual(expected);
  });
});

describe("verifyRepeatedWords", () => {
  test("should return an object with repeated words in a single paragraph", () => {
    const input = verifyRepeatedWords(fileContentParagraph.toLowerCase());
    const expected = { lorem: 2, sit: 2 };

    expect(input).toStrictEqual(expected);
  });

  test("should return null if there is no repeated word", () => {
    const input = verifyRepeatedWords("Lorem ipsum");
    const expected = null;

    expect(input).toStrictEqual(expected);
  });

  test("should return null if there is  empty string", () => {
    const input = verifyRepeatedWords("");
    const expected = null;

    expect(input).toStrictEqual(expected);
  });
});
