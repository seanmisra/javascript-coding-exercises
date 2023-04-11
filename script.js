// CONDITION 1 and 3 will pass, 2 will fail

if ("3" == 3) {
    console.log("CONDITION 1 PASSED");
} else {
    console.log("CONDITION 1 FAILED");
}

if ("3" === 3) {
    console.log("CONDITION 2 PASSED");
} else {
    console.log("CONDITION 2 FAILED");
}

if (3 === 3) {
    console.log("CONDITION 3 PASSED");
} else {
    console.log("CONDITION 3 FAILED");
}