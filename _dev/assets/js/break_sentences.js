function countWords(str) {
  return str.trim().split(/\s+/).length;
}

var wordsProverbioA = countWords(one.textContent);
var lettersProverbioA = one.textContent.length;

console.log(wordsProverbioA + " | " + lettersProverbioA);

function cut(n) {
    return function textCutter(i, text) {
        var short = text.substr(0, n);
        if (/^\S/.test(text.substr(n)))
            return short.replace(/\s+\S*$/, "");
        return short;
    };
}

one.textContent(cut(20));
