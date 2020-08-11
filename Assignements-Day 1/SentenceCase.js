var str = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
function toSentenceCase(str) {
    var sentenceCase = "";
    for (var _i = 0, _a = str.split('.'); _i < _a.length; _i++) {
        var sentence = _a[_i];
        sentenceCase += sentence ? sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1) + ". " : "";
    }
    return sentenceCase;
}
console.log(toSentenceCase(str));
