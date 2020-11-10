// h) JS func which will take arr of nums stored & find 2nd lowest & 2nd greatest nums, respectively

function secNums(... arr) {

    let lowestNum = arr[0]; let secLowest = arr[0];
    let greatestNum = arr[0]; let secGreatest = arr[0];

    for (let l = 1; l < arr.length; l++) {
        if(arr[l] < lowestNum) {
            secLowest = lowestNum;
            lowestNum = arr[l];
        }
        if(arr[l] < secLowest && arr[l] !== lowestNum) {
            secLowest = arr[l];
        }
        if(arr[l] > greatestNum) {
            secGreatest = greatestNum;
            greatestNum = arr[l];
        }
        if(arr[l] > secGreatest && arr[l] !== greatestNum) {
            secGreatest = arr[l];
        }
    }
    console.log("array: " + lowestNum + " - lowest num, " + greatestNum + " - greatest num");
    return [secLowest, secGreatest]
}
console.log(secNums(1,2,3,4,5,6,7,8,9,10));
console.log(secNums(4,7,9,1,8,2,10,3,6,5));