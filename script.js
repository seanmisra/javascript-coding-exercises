const testArr = [1, 2, 3, 4, 5];
let [val1, val2, val3, val4, val5] = testArr;

console.log(val1); // 1
console.log(val2); // 2
console.log(val3); // 3
console.log(val4); // 4
console.log(val5); // 5

let [firstVal, ...otherVals] = testArr;
console.log(firstVal); // 1
console.log(...otherVals) // [2, 3, 4, 5]