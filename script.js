let valOne = undefined;
let valTwo = null;
let valThree;

console.log(valOne);
console.log(valTwo);
console.log(valThree);

console.log(valOne === valThree); // true: undeclared defaults to undefined
console.log(valOne === valTwo); // false: undefined !== null
console.log(!!valOne === !!valTwo); // true: both undefined and null are falsey