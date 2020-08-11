// Convert string to Sentence case
var str = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";

function toSentenceCase(str: string): string {
    let sentenceCase: string = "";
    for(let sentence of str.split('.')) {
        sentenceCase += sentence ? sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1) + ". " : "";
    }
    return sentenceCase;
}

console.log(toSentenceCase(str));