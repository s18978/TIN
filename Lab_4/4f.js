// f) Write JavaScript function that accepts number as parameter and check the number is prime or not

function primeNumber(num) {

    for(let n = 2; n < num; n++) { if(num % n === 0) { return false; }

    else if (num === 2) { return true; }
    else if(num === 1) { return false; }
    return true;
    }
}
console.log(primeNumber(7));
console.log(primeNumber(8));
console.log(primeNumber(9));
console.log(primeNumber(101));