try {
    console.log(x); // try to log undefined variable
} catch (e) {
    // gets caught
    console.log(e)
} finally {
    console.log("finally executed");
}

const x = 10;

try {
    console.log(x); // x is now defined
} catch (e) {
    console.log(e)
} finally {
    console.log("finally is still executed");
}