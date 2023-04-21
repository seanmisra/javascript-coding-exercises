loopOne: for (let i = 0; i < 5; i++) {
    console.log("LOOP: ", i + 1);
    loopTwo: for (let x = 0; x < 20; x++) {
        if (x % 2 !== 0) {
            continue;
        } else if (i > 1) {
            console.log("EXITING...");
            break loopOne; 
        }
        console.log(x); // print even numbers less than 20 TWO times.
    }
}

// NOTE, continue could be replaced with continue loopTwo with the same effect