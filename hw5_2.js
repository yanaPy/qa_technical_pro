function pad(string, symbol, quantyty, operation){

    quantyty = quantyty >> 0;
    padString = String(symbol || " ");

    if (string.length > quantyty) {
        return String(string);
    } else {
        quantyty = quantyty - string.length;
        if (quantyty > padString.length) {
            padString += padString.repeat(quantyty / padString.length);
        }
        if(operation){
            return padString.slice(0, quantyty) + String(string);

        } else return String(string) + padString.slice(0, quantyty);
    }
}


console.log(pad('abc', ' ', 10, true));// "       abc"
console.log(pad("abc", "foo", 10, true));// "foofoofabc"
console.log(pad('abc', '123465', 6, true));// "123abc"
console.log(pad('abc', '0', 8, true));// "00000abc"
console.log(pad('abc', "", 1, true));// "abc"

console.log("-------");


console.log(pad("abc", "", 10, false));// "abc       "
console.log(pad("abc", "foo", 10, false));// "abcfoofoof"
console.log(pad('abc', "123456", 6, false));// "abc123"

"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"

