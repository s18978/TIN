// c) Write JavaScript function that checks whether a passed string is palindrome or not

function palindrome(str) {

    const c = str.toLowerCase().match(/[a-z]/gi).reverse();
    return c.join('') === c.reverse().join('');
}

if (palindrome("Wow")) {
    console.log("word 'Wow' is palindrome");
} else {
    console.log("word 'Wow' isn't palindrome");
}

if (palindrome("Nope")) {
    console.log("word 'Nope' is palindrome");
} else {
    console.log("word 'Nope' isn't palindrome");
}