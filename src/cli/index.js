#!/usr/bin/env node
import path from 'path';
import { Command } from 'commander';
import chalk from 'chalk';
import { processFile } from '../index.js';

const program = new Command();

program
    .name('repeated-words')
    .description('Processes paragraphs of text to identify repeated words and exports a file with the frequency of each word')
    .version('1.2.3')
    
program
    .option('-t, --text <string>', 'Path of the text to be processed')
    .option('-d, --destination <string>', 'Destination path for results file', '.')
    .option('-n, --name-text <string>', 'Name of the file to be created ', 'repeatedWords')
    .action((options) => {
        const { text, destination, nameText } = options;

        if(!text) {
            console.error(chalk.red('Error: flag -t is missing. Type --help for additional information'));
            return;
        }

        const textPath = path.resolve(text);
        const destinationPath = path.resolve(destination);

        try {
            processFile(textPath, destinationPath, nameText);
        } catch (error) {
            console.error(chalk.red('Error: An error occurred while processing the file', error));
        }
    })

program.parse();