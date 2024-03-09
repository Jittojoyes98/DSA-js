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
delete user.location; // this property is for objects only.
console.log(user);

// 5. deep and shallow copy
/**
 * @checkout https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/
 */

// since a reference is copied , its called shallow copy
let ob1 = { a: 1, b: 5 };
let ob2;
ob2 = ob1;

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

// 8. Loop through
let person = { a: 1, b: 5 };
for (key in person) {
  console.log(key, person[key]);
}
// check if both the objects are equal use is or loop through

console.log(Object.is(person, person1));

// 9. inheritence and prototype

const o1 = {
  name: "Vishal",
};

const o2 = {
  age: 21,
  __proto__: o1,
};

console.log(o2.name);

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

// 2. find all player count

const data = {
  id: 1,
  name: ["P1", "P4"],
  next: {
    id: 2,
    name: ["P3"],
    next: {
      id: 3,
      name: ["P3", "P4", "P5"],
      next: {
        id: 4,
        name: ["P1", "P2", "P4"],
        next: {
          id: 5,
          name: ["P2", "P3", "P5"],
          next: null,
        },
      },
    },
  },
};

let ans = {};
let currentArray = [];
let currentObj = data;

while (true) {
  if (!currentObj) {
    break;
  }
  currentObj.name.map((val) => {
    if (ans[val]) {
      ans[val]++;
    } else {
      ans[val] = 1;
    }
  });
  currentObj = currentObj.next;
}

currentArray = Object.entries(ans);
console.log(currentArray);
