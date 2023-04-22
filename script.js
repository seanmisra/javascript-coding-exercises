let myObject = {
    test: 1,
    testTwo: 2
};

Object.freeze(myObject);

myObject.testThree = 3;
console.log(myObject); // testThree prop is NOT added

myObject.testTwo = 22;
console.log(myObject); // testTwo is NOT modified


let myObjectTwo = {
    test: 1,
    testTwo: 2
};

Object.seal(myObjectTwo);

myObjectTwo.testThree = 3;
console.log(myObjectTwo); // testThree prop is NOT added

myObjectTwo.testTwo = 22;
console.log(myObjectTwo);  // testTwo IS MODIFIED