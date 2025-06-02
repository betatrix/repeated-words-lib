#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import chalk from 'chalk';
import { countRepeatedWords } from './paragraphWordCounter.js';
import { mountOutputFile } from './helpers.js';

const program = new Command();

program
    .name('repeated-words')
    .description('Searches for repeated words in paragraphs of a text. Returns a file with the words found')
    .version('1.0.2')
    
program
    .option('-t, --text <string>', 'Path of the text to be processed')
    .option('-d, --destination <string>', 'Destination path for results file', '.')
    .action((options) => {
        const { text, destination } = options;

        if(!text) {
            console.error(chalk.red('Error: flag -t is missing. Type --help for additional information'));
            return;
        }

        if(!destination) {
            console.error(chalk.red('Error: flag -d is missing. Type --help for additional information'));
            return;
        }

        const textPath = path.resolve(text);
        const destinationPath = path.resolve(destination);

        try {
            processFile(textPath, destinationPath);
        } catch (error) {
            console.error(chalk.red('Error: An error occurred while processing the file', error));
        }
    })

program.parse();

function processFile(text, destination) {
    fs.readFile(text, 'utf-8', (error, data) => {
        if (error) {
            console.error(chalk.red('Error to read file:'), error.message);
            process.exit(1);
        }
    
        const result = countRepeatedWords(data);
        createAndSaveFile(result, destination);
    });
}

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