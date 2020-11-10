// a) Function calculating factorial of number. Do this using recursion and iteration.
// Create recursive function using function expression, iterative function using function declaration.

function recursiveFactorial(rF) {
    if (rF <= 1) {
        return 1;
    }
    if (rF > 0)
            return rF * recursiveFactorial(rF - 1);
}

function iterativeFactorial(iF) {
    let iterativeF = 1;
    for (let a = 2; a <= iF; a++) {
        iterativeF *= a;
    }
    return iterativeF;
}

console.log(recursiveFactorial(5) + " - recursive factorial");
console.log(iterativeFactorial(5) + " - iterative factorial");