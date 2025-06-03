# Repeated Words

Processes paragraphs of text to identify repeated words and exports a file with the frequency of each word.

> [!NOTE]
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
- `-h` or `--help` - To show the options.

## Dependencies

- [Commander](https://github.com/tj/commander.js)
- [Chalk](https://github.com/chalk/chalk)

## Maintainer

- [Beatriz Andrade](https://github.com/betatrix)
