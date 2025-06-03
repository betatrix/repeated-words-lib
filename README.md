# Repeated Words

Processes paragraphs of text to identify repeated words and exports a file with the frequency of each word.

> This package was made just for learning and fun :)

## Install

``` cmd
npm install repeated-words
```

## Usage

In the terminal, type:

``` cmd
repeated-words -t /path/to/my_text.txt -d /path/result/destination
```

If you want the text file to be created in the root folder where the command is being executed:

``` cmd
repeated-words -t /path/to/my_text.txt
```

## Command-Line Options

- `-t` or `--text <string>` - Path of the text to be processed.
- `-d` or `--destination <string>` - Destination path for results file (default: root path).
- `-n` or `--name-text <string>` - Name of the file to be created (default: repeatedWords).
- `-h` or `--help` - To show the options.

## Dependencies

- [Commander](https://github.com/tj/commander.js) - version ^14.0.0
- [Chalk](https://github.com/chalk/chalk) - version ^5.4.1

## Maintainer

- [Beatriz Andrade](https://github.com/betatrix)
