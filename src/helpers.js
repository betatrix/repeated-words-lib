function convertObjectToArray(obj) {
    return Object.keys(obj).map((key) => [key]);
}

export function mountOutputFile(wordsList) {
    let finalText = '';

    wordsList.forEach((paragraph, index) => {
        const repeated = convertObjectToArray(paragraph).join(', ');
        
        if(!repeated) return;

        finalText += `Repeated words on paragraph ${index + 1}: ${repeated} \n`;
    });

    return finalText;
}