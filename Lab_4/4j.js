// j) Write a JavaScript program for binary search.

function binaryS(array, n) {
    let first = 0;
    let last = array.length - 1;

    while (first <= last) {
        let x = ((first + last)/2) | 0;
        if (array[x] === n)
            return x;
        else {
            if (array[x] > n)
                last = x-1;
            else
                first = x+1;
        }
    }
    return -1;
}
console.log(binaryS([3,4,4,5,5,6,7,7,8],5));
console.log(binaryS([3,4,4,5,5,6,7,7,8],6));