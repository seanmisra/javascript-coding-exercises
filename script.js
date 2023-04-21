const myArr = [1, 2, 3, 4, 5];
const lastElement = myArr.pop();
console.log(lastElement); // 5
console.log(myArr); //[1, 2, 3, 4, 5];
myArr.push(5); // put back last element
console.log(myArr); // [1, 2, 3, 4, 5]
myArr.push(6, 7); // add two more elements to end
console.log(myArr); // [1, 2, 3, 4, 5, 6, 7]