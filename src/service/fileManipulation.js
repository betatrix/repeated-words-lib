import fs from "fs";
import chalk from "chalk";
import { countRepeatedWordsInParagraphs } from "../index.js";
import { objectToFormattedArray } from "../index.js";

// Join a list of words into a text
export function mountOutputFile(wordsList) {
  let finalText = "";

  wordsList.forEach((paragraph, index) => {
    const repeated = objectToFormattedArray(paragraph).join(", ");

    if (!repeated) return;

    finalText += `Repeated words on paragraph ${index + 1} - ${repeated}\n`;
  });

  return finalText;
}

// Function to create a new file with the repeated words from each paragraph of the text
export async function createAndSaveFile(wordsList, filePath, nameFileText) {
  const newFile = `${filePath}/${nameFileText}.txt`;
  const wordsText = mountOutputFile(wordsList);

  try {
    await fs.promises.writeFile(newFile, wordsText);
    console.log(chalk.green("File created! :)"));
    return { success: true };
  } catch (error) {
    console.error(chalk.red("Error to create file:"), error);
    return { success: false, error };
  }
}

// Function to read the file and process the text
export function processFile(text, destination, nameFileText) {
  fs.readFile(text, "utf-8", (error, data) => {
    try {
      if (error) throw error;

      const result = countRepeatedWordsInParagraphs(data);
      createAndSaveFile(result, destination, nameFileText);

      console.log(chalk.green("File processed"));
      return { success: true };
    } catch (error) {
      console.error(chalk.red("Error to read file:"), error.message);
      return { success: false, error };
    }
  });
}
