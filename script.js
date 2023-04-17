function isolatedFunction() {
    let counter = 0;
    counter++;
    return counter;
}

// will always be 1 (bc counter is stored on the stack)
console.log(isolatedFunction());
console.log(isolatedFunction());
console.log(isolatedFunction());


function outerFunction() {
    let counter = 0;

    return function increment() {
        return ++counter;
    }
}

let incrementFunc = outerFunction();
// will be 1, 2, 3, bc counter count is stored on heap (not stack)
console.log(incrementFunc());
console.log(incrementFunc());
console.log(incrementFunc());