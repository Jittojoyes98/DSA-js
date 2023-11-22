// https://javascript.info/map-set
// Map is a collection of keyed data items, just like an Object.
// But the main difference is that Map allows `keys of any type`

const mapValue = new Map();
mapValue.set(1, "abcd");
mapValue.set(true, "heeeeey");

console.log(mapValue.get("1"));
console.log(mapValue.get(true));
console.log(mapValue.has(true));
console.log(mapValue.size);

console.log(mapValue.delete(true));

console.log(mapValue);

// 1. iteration over map

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry);
}

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

// 2.convert map to object and object to map

let obj = {
  name: "John",
  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get("name")); // John

//

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2

prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2

/* set */

let set = new Set();

let johny = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(johny);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

// 1. Question

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
alert(visitsCountObj["[object Object]"]); // 123 , change to ben or john same 123 overrides.
