const arr1 = [1, 2, 3, 4, 5, 6, 7];

const arr2 = [8, 9, 10];

const arr3 = [0, ...arr1, 46, 56, 66, 76];

// console.log(arr3);

// const obj = {
//   name: "John",
//   age: 30,
//   occupation: "Software Engineer",
//   address: "itahari",
// };

// const obj2 = ;

// console.log({ ...obj, address: "birat" });

//destructuring

const obj = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  address: "itahari",
};

const { name, age, occupation, address } = obj;

// console.log(name);
// console.log(obj.name);s
// console.log(age);

const arr12 = [12, 40, 12, 6, 3, 8];

const [a, b, c, d] = arr12;

console.log(a, b, c, d);
