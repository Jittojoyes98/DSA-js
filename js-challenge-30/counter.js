/**
 * @param {number} n
 * @return {Function} counter
 * @concept closure
 */
var createCounter = function (n) {
  return function () {
    let ans = n;
    n = n + 1;
    return ans;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
