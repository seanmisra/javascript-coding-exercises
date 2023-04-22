// FIRST METHOD
const myArr = [1, 2, 3, 4, 5];
delete myArr[0];
console.log(myArr); // notice that element 0 is now empty
console.log(myArr.length) // 5

// SECOND METHOD
let myArrTwo = [1, 2, 3, 4, 5];
myArrTwo = myArrTwo.filter(x => x !== 1);
console.log(myArrTwo);
console.log(myArrTwo.length); // 4

// THIRD METHOD
const myArrThree = [1, 2, 3, 4, 5];
myArrThree.shift();
console.log(myArrThree);
console.log(myArrThree.length); // 4

// FOURTH METHOD
const myArrFour = [1, 2, 3, 4, 5];
const index = myArrFour.indexOf(1);
myArrFour.splice(index, 1); 
console.log(myArrFour);
console.log(myArrFour.length); // 4