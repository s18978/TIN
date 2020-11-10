// e) Write JavaScript function that accepts string as parameter and find longest word within string

function longestWord(string) {
    let s = string.split(' ');
    let longestW = s[0];
    for (let l = 1; l < s.length; l++) {
        if (s[l].length > longestW.length) {
            longestW = s[l];
        }
    }
    return longestW;
}
console.log(longestWord("cartography cat world coffee") + " - the longest word in our string");