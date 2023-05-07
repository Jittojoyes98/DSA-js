/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    let number = x;
    let result = 0;
    while (number > 0) {
        let fra = number % 10;
        result = result * 10 + fra;
        number = Math.floor(number / 10);
    }
    if (result === x) {
        return true;
    }
    return false;
};