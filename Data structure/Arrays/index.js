let arrayNew = new Array(10).fill(10);
console.log(arrayNew);
let arr = ["abcd", 2, 3, 4, 5];

// 1.for each method
arr.forEach((x, i) => {
  console.log(x, i);
});

// 2.change in method : in object `in` array `of`
for (let x of arr) {
  console.log(x);
}
// 3.check if an element exist
console.log(arr.includes("abcd"));

// 4.index of an element
console.log(arr.indexOf("abcd"));

// 5.How to delete, add & update elements from a specific index?

// we use splice for this.
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

let arrSplice = [1, 2, 3, 4, 5];

// console.log(arrSplice.splice(3,2)) // removing
// console.log(arrSplice.splice(3,0,6,7,8)) // adding starting from index 3.not deleting anything so returns [].
// console.log(arrSplice.splice(4,1,10)) //replacing, returns the deleted [5]
console.log(arrSplice);


// 6.slice is different

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.
// its used to create a subarray and thus dont change the orginal array .

arr = ["abcd", 2, 3, 4, 5];

console.log(arr.slice(0, 3)); // returns a new array not including the last element.

console.log(arr); // no change in array

// 7. Shallow Copy of Array change the orginal on changing the copy.

let newArray = arr;
newArray[2] = "efgh";
console.log(arr, newArray);

arr[2] = 3; // reset

// 8. deep copy (doesnt change the value)

let arrA = [...arr];
// same with these methods
let arrB = Array.from(arr);

arrA[1] = "efgh";
console.log(arr, arrA);

// reverse, sort methods

arr.reverse();
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

// flat method
const y = [1, 2, [4, 5, [6, 7]], 8, 0];
const flattedArray = y.flat(2);
console.log(flattedArray);

// find method , returns true or false , 0,1
const positiveNumber = flattedArray.find((ele, i) => ele > 0);
console.log(positiveNumber);
