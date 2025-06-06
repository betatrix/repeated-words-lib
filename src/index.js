import {
  countRepeatedWordsInParagraphs,
  extractParagraphs,
  verifyRepeatedWords,
} from "./service/paragraphWordCounter.js";
import {
  createAndSaveFile,
  mountOutputFile,
  processFile,
} from "./service/fileManipulation.js";
import { objectToFormattedArray } from "./utils/formattingUtils.js";

export {
  countRepeatedWordsInParagraphs,
  extractParagraphs,
  verifyRepeatedWords,
  createAndSaveFile,
  mountOutputFile,
  processFile,
  objectToFormattedArray,
};
