const myArr = [1, 2, 3, 4, 5];
const evenArr = [2, 4, 6];

const isEven = numb => numb % 2 === 0;

const anyEven = myArr.some(isEven);
const allEven = myArr.every(isEven);
const allEvenTwo = evenArr.every(isEven);

console.log(anyEven); // true
console.log(allEven); // false
console.log(allEvenTwo); // true