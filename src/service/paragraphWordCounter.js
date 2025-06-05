// function to extract paragraphs from a text
function extractParagraphs(text) {
  return text.toLowerCase().split("\n");
}

// function to check repeated words in a paragraph and create an object with the results
function verifyRepeatedWords(text) {
  const words = text.split(/[^a-zA-Z0-9À-ÿ]+/g);
  const filterWords = words.filter((word, index, self) => {
    return self.indexOf(word) !== index && word.length >= 3;
  });

  if (filterWords.length === 0) return null;

  const objectResult = {};
  filterWords.forEach((word) => {
    objectResult[word] = (objectResult[word] || 1) + 1;
  });

  return objectResult;
}

// function that returns an array containing objects with the words and the number in which they repeat in a paragraph
export function countRepeatedWordsInParagraphs(text) {
  const paragraphs = extractParagraphs(text);
  const wordsRepeated = paragraphs.flatMap((paragraph) => {
    if (!paragraph) return [];
    return verifyRepeatedWords(paragraph) || {};
  });

  return wordsRepeated;
}
