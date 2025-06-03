import fs from 'fs';
import chalk from 'chalk';
import { countRepeatedWordsInParagraphs } from './paragraphWordCounter.js';
import { objectToFormattedArray } from './helpers.js';

// Join a list of words into a text
function mountOutputFile(wordsList) {
    let finalText = '';
    
    wordsList.forEach((paragraph, index) => {
        const repeated = objectToFormattedArray(paragraph).join(', ');
        
        if(!repeated) return;
        
        finalText += `Repeated words on paragraph ${index + 1} - ${repeated} \n`;
    });
    
    return finalText;
}

// Function to create a new file with the repeated words from each paragraph of the text
async function createAndSaveFile(wordsList, filePath) {
    const newFile = `${filePath}/repeatedWords.txt`;
    const wordsText = mountOutputFile(wordsList);
    
    try {
        await fs.promises.writeFile(newFile, wordsText);
        console.log(chalk.green('File created! :)'));
    } catch (error) {
        console.error(chalk.red('Error to create file:'), error);
    }
}

// Function to read the file and process the text
export function processFile(text, destination) {
    fs.readFile(text, 'utf-8', (error, data) => {
        if (error) {
            console.error(chalk.red('Error to read file:'), error.message);
            process.exit(1);
        }
    
        const result = countRepeatedWordsInParagraphs(data);
        createAndSaveFile(result, destination);
    });
}