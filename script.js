const myArr = [1, 2, 3, 4, 5];
const firstElement = myArr.shift(); // remove first element
console.log(firstElement); // 1
console.log(myArr); //[2, 3, 4, 5];

myArr.unshift(1); // put back first element
console.log(myArr); //[1, 2, 3, 4, 5];

myArr.unshift(-1, 0); // add two elements to front
console.log(myArr); // [-1, 0, 1, 2, 3, 4, 5];