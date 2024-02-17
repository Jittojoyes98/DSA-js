let newString = "abcdef";
// 1. chatAt
console.log(newString.charAt(1));

let name = "Jitto";
let anotherName = "Vishal";
console.log(name.localeCompare(anotherName)); // returns 0 if equal and -1 if not equal.

// 2. replace and replaceall

console.log(name.replace("Ji", "Bi"));

// 3. substring

console.log(anotherName.substring(0, 3)); // [0,3)
console.log(anotherName.slice(0, 3)); // [0,3)

// 4. split and join
let str = "jkdfhkjdhf";

console.log(str.split(""));
const subString = str.split("").sort();
console.log(subString);
console.log(subString.join("-"));

// 5. trim in strings to remove unnecessary spaces in start or end or both

str = " abc dfgss kljj  ";

const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();

console.log(trimStr);
console.log(trimStrEnd);
console.log(trimStrStart);

const lastName = "Rajput";

console.log(lastName + str);
