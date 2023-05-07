/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let resetValue = init
    let resetSet = false;
    return {
        increment: () => {
            if (resetSet) {
                init = resetValue
                resetSet = false
            }
            init = init + 1;
            return init
        },
        decrement: () => {
            if (resetSet) {
                init = resetValue
                resetSet = false
            }
            init = init - 1;
            return init
        },
        reset: () => {
            resetSet = true;
            return resetValue;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */