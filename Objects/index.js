const user = {
  name: "Jitto",
  age: 12,
  // here the key is always string , but value can be anything.
};

// 1. copy question :

let obj1 = { a: 1, b: 5 };
obj1 = obj2;
obj2.a = 5;

console.log(obj2.a); // 5
console.log(obj1.a); // 5

// reason : reference is copied and thus changes everything
