import {
  createAndSaveFile,
  mountOutputFile,
  processFile,
} from "../src/index.js";
import {
  removeFile,
  verifyFileExists,
  getAllFilePath,
} from "./utils/fileUtils.js";
import { jest } from "@jest/globals";
import fs from "fs";

const wordsList = [
  { name: 1, text: 2, test: 3 },
  {},
  { this: 4, is: 5, nice: 6 },
  { bea: 2, kenzo: 2, nala: 2 },
];
const fixturesPath = "./tests/fixtures";
const nameNewFile = "repeatedWords";

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
  console.error.mockRestore();
});

describe("createAndSaveFile", () => {
  afterAll(() => {
    removeFile(fixturesPath, nameNewFile);
  });

  test("should create file and return success: true", async () => {
    const input = await createAndSaveFile(wordsList, fixturesPath, nameNewFile);
    const expected = { success: true };
    expect(input).toStrictEqual(expected);
  });

  test("should find the created file", async () => {
    const input = await verifyFileExists(fixturesPath, nameNewFile);
    expect(input).toBeTruthy();
  });

  test("should throw error when wordsList is invalid", async () => {
    const wordsListEmpty = null;

    await expect(() =>
      createAndSaveFile(wordsListEmpty, fixturesPath, nameNewFile)
    ).rejects.toThrow("Expected wordsList to be an array of objects");
  });

  test("should catch error and return success: false", async () => {
    // Manual mock of writeFile, forcing error
    const writeFileMock = jest
      .spyOn(fs.promises, "writeFile")
      .mockRejectedValueOnce(new Error("Write failed"));

    const input = await createAndSaveFile(wordsList, fixturesPath, nameNewFile);

    expect(input.success).toBe(false);
    expect(input.error.message).toBe("Write failed");

    // Restore original behavior after testing
    writeFileMock.mockRestore();
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

  test("should throw error when wordsList is invalid", () => {
    const wordsListEmpty = null;

    expect(() => mountOutputFile(wordsListEmpty)).toThrow(
      "Expected wordsList to be an array of objects"
    );
  });
});

describe("processFile", () => {
  const destinationPath = ".";
  const originalTextPath = getAllFilePath(fixturesPath, "sample-text");

  afterAll(() => {
    removeFile(destinationPath, nameNewFile);
  });

  test("should process file and return sucess: true ", async () => {
    console.log(originalTextPath);
    const input = await processFile(
      originalTextPath,
      destinationPath,
      nameNewFile
    );

    expect(input).toStrictEqual({ success: true });
  });

  test("should catch error and return success: false", async () => {
    const readFileMock = jest
      .spyOn(fs.promises, "readFile")
      .mockRejectedValueOnce(new Error("Read failed"));

    const input = await processFile(
      originalTextPath,
      destinationPath,
      nameNewFile
    );

    expect(input.success).toBe(false);
    expect(input.error.message).toBe("Read failed");

    readFileMock.mockRestore();
  });
});
