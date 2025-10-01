const users = [
  { name: "Viha", age: 25, designation: "Full stack developer" },
  { name: "Saket", age: 26, designation: "UI/UX" }
];

console.log(`user name at 0th index is : ${users[0].name}`);

//Using for loop
console.log("Traversing using for loop");
for (let i = 0; i < users.length; i++) {
  console.log(`Name: ${users[i].name}, Age: ${users[i].age}, Designation: ${users[i].designation}`);
}

const fruits = ["pineapple", "strawberry", "apple", "banana", "mango"];

console.log(`Fruit at index 1 is ${fruits[1]}`);

//Make fruits in uppercase
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

//Using foorEach
console.log("Traversing using for each loop");
fruits.forEach((fruit, index) => {
  console.log(`Fruit at position ${index} is ${fruit}`);
});
