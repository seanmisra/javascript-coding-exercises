let firstExample = parseInt("10extra");
let secondExample = parseInt("extra10");
let thirdExample = parseInt("extra");


if (typeof(firstExample) === "NaN") {
    console.log("first example is NaN");
} else {
    console.log("FIRST EXAMPLE: " + firstExample);
}

if (typeof(secondExample) === "NaN") {
    console.log("second example is NaN");
} else {
    console.log("SECOND EXAMPLE: " + secondExample);
}

if (typeof(thirdExample) === "NaN") {
    console.log("third example is NaN");
} else {
    console.log("THIRD EXAMPLE: " + thirdExample);
}