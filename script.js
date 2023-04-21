let arrWithDuplicates = [1, 1, 2, 2, 2, 3, 3, 4];
let uniqueArr = [...new Set(arrWithDuplicates)];

console.log(uniqueArr); // [1, 2, 3, 4]