function extractParagraphs(text) {
    return text.toLowerCase().split('\n');
}

function verifyRepeatedWords(text) {
    const words = text.split(/[^a-zA-Z0-9À-ÿ]+/g);
    const filterWords = words.filter((word, index, self) => {
        return self.indexOf(word) !== index && word.length >= 3;
    });
    
    if (filterWords.length === 0) return null;
    
    const objectResult = {};
    filterWords.forEach(word => {
       objectResult[word] = (objectResult[word] || 1) + 1;
    });
    
    return objectResult;
}

export function countRepeatedWords(text) {
    const paragraphs = extractParagraphs(text);
    const countObject = paragraphs.flatMap(paragraph => {
        if (!paragraph) return [];
        return verifyRepeatedWords(paragraph) || {};
    })

    return countObject;
}