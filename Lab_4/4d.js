// d) Write JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster', Expected Output : 'abeemrstw'

function alphabeticalOrder(string) {
    return string.split('').sort().join('');
}
console.log(alphabeticalOrder("webmaster"));