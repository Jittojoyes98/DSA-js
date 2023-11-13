const user = {
  name: "Jitto",
  age: 12,
  1: 45,
};

// Properties :

// 1 .here the key is always string , but value can be anything.

// 2 .two methods for accessing elements of the object, also if the key is like Last Name, we need to specify
// string method .
console.log(user.name);
console.log(user[`name`]); // will need to convert to string
console.log(user[1]); // if its a number we can do both, but dont know if its correct method.

// 3. Check for a key in Object hasOwnProperty
console.log(user.hasOwnProperty("name"));

// 4. Add , delete and update
user.name = "Jibin";
user.location = "India";
console.log(user);
delete user.location;
console.log(user);

// 5. deep and shallow copy

// since a reference is copied , its called shallow copy
let ob1 = { a: 1, b: 5 };
let ob2;
ob1 = ob2;

// deep copy
let person1 = { a: 1, b: 5 };
let person2 = Object.assign({}, person1);
person2.a = 5;
console.log(person2.a); // 5
console.log(person1.a); // 1

// 6. seal and freeze method
//  freeze means that we cant update,delete or add anything to object- Object.freeze(obj) Object.isFreezed
//  seal means we cant delete or add but we can update the object -Object.seal(obj) Object.isSealed

// 7. values, keys and entries

let obj = {
  a: 5,
  b: "abcdef",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); //  an array of elements where each has an array of 2 elements, key,value

/* <-----Done -------> */

// Questions :

// 1. copy question :

let obj1 = { a: 1, b: 5 };
let obj2;
obj2 = obj1;
obj2.a = 5;

console.log(obj2.a); // 5
console.log(obj1.a); // 5

// reason : reference is copied and thus changes everything

//
