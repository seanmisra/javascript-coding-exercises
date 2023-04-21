function curry(fn) {
    return function(a) {
        console.log("first val", a);
        return function (b) {
            console.log("second val", b);
            return fn(a, b);
        }
    }
}

function sum(a, b) {
    return a + b;
}

const firstSum = sum(5, 4); 
console.log("firstSum", firstSum); // 9

const currySum = curry(sum);
const secondSum = currySum(5)(4); // 5 and 4 are logged
console.log("secondSum", secondSum); // 9

// for testing
const test = currySum(5); // just 5 will be logged
console.log(test); // will be a function