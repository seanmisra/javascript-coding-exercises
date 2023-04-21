const myArr = [1, 2, 3, 4, 5];

const sum = myArr.reduce((total, nextVal) => {
    return total + nextVal
});
console.log("sum", sum); // 15

// can also include initial value
const sumTwo = myArr.reduce((total, nextVal) => {
    return total + nextVal;
}, -15);
console.log("sumTwo", sumTwo); // 0