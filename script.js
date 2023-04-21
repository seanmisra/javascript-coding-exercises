const myArr = [1, 2, 3, 4, 5];

const secondArr = myArr.map(numb => numb + 1);
console.log(secondArr);

const thirdArr = myArr.flatMap(numb => [numb + 1]);
console.log(thirdArr); // it will be same as secondArr, because result is flattened by one level;