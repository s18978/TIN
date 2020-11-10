// i) Write JS func to convert amount of money to coins.
// Sample function: amountToCoins(46, [25,10,5,2,1])
// Here 46 is the amount and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

function amountToCoins(amount, coins) {

    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            leftAmount = (amount - coins[0]);
            return [coins[0]].concat(amountToCoins(leftAmount, coins));
        } else {
            coins.shift();
            return amountToCoins(amount, coins);
        }
    }
}
console.log(amountToCoins(46, [25, 10, 5, 2,1]));