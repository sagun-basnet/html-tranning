// var, let, const
var a = 1; //integer
var b = "hello"; //String
var c = false; //Boolen
var d = 12.45; //Float

var arr = [1, 3, 4, "hi", false, 133.88, 56, 4, 8, 2, 6, 8, 11, 0, 88, 66];
// console.log(arr);

for (let i = arr.length - 1; i >= 0; i--) {
  // console.log(arr[i]);
}

// =================================

// console.log(arr[3]);

// ============Function================

// function myFunction1() {
//     console.log(1);
// }
function myFunction2(a, b) {
  return a + b;
}
function myFunction3() {
  console.log(3);
}

const value = myFunction2(15, 15);

// console.log(value);

// console.log(myFunction2(30,30));

function myName() {
  return "Sagun basnet";
}

// console.log("User name: " + myName());

// ===========var and let=================

// function myLoop() {
//   for (let i = 0; i <= 10; i++) {//i=11
//     console.log(i);
//   }
//   console.log("I value: "+i);
// }
// myLoop()

// ======================JS Object=====================
const myObj = {
  name: "Sagun Basnet",
  age: 12,
  address: "Itahari",
};
// console.log(myObj);

const myArray = [12, 45, 11, 78, 12, 55, 99, 12, 56];

function largeNumber() {
  let largValue = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (largValue < myArray[i]) {
      largValue = myArray[i];
    } else {
      largValue = largValue;
    }
  }
  return largValue;
}

console.log(largeNumber());