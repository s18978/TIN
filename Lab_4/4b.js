// b) Function calculating nth number in Fibonacci sequence.

function fibonacciNumber(num) {
    if(num <= 1) { return 1;
    } else return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
}

console.log(fibonacciNumber(5) + " - Fibonacci number");