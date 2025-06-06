import {
  createAndSaveFile,
  mountOutputFile,
  processFile,
} from "../src/index.js";
import { removeFile, searchFile } from "./utils/fileUtils.js";

const wordsList = [
  { name: 1, text: 2, test: 3 },
  {},
  { this: 4, is: 5, nice: 6 },
  { bea: 2, kenzo: 2, nala: 2 },
];

describe("createAndSaveFile", () => {
  const filePath = "./tests/fixtures";
  const nameFileText = "repeatedWords";

  afterAll(() => {
    removeFile(filePath, nameFileText);
  });

  test("should create file and return success true", async () => {
    const input = await createAndSaveFile(wordsList, filePath, nameFileText);
    expect(input).toStrictEqual({ success: true });
  });

  test("should find the created file", async () => {
    const input = await searchFile(filePath, nameFileText);
    expect(input).toBeTruthy();
  });

  test("should throw error and return false", async () => {
    const wordsListEmpty = {};
    const input = await createAndSaveFile(
      wordsListEmpty,
      filePath,
      nameFileText
    );
    expect(input).toStrictEqual({ success: true });
  });
});

describe("mountOutputFile", () => {
  test("should return a formatted text output", () => {
    const input = mountOutputFile(wordsList);
    const expected =
      "Repeated words on paragraph 1 - name: 1, text: 2, test: 3\n" +
      "Repeated words on paragraph 3 - this: 4, is: 5, nice: 6\n" +
      "Repeated words on paragraph 4 - bea: 2, kenzo: 2, nala: 2\n";

    expect(input).toStrictEqual(expected);
  });
});

// describe("processFile", () => {
//   test("should return an array of objects with repeated words in the text paragraphs", () => {
//     const input = processFile();
//     const expected = '';

//     expect(input).toStrictEqual(expected);
//   });
// });
