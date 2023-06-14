let mySet = new Set([1, 2, 3, 4]);

for (let item of mySet) {
  console.log(item);
}

let myMap = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
  ["profesión", "programador"],
]);
myMap.set("9aís", "Chile");

for (let [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}
console.log(myMap);
