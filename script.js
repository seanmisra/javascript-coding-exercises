const myArr = [1, 2, 3, 4, 5];

const singleVal = myArr.find(numb => numb === 1);
console.log(typeof singleVal); // number
console.log(singleVal); // 1

const arrVal = myArr.filter(numb => numb === 1);
console.log(typeof arrVal); // object
console.log(arrVal); // [1]