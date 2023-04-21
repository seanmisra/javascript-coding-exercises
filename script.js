const myInterval = setInterval(() => {
    console.log("...Cycled...");
}, 1000); // will cycle every second

setTimeout(() => {
    clearInterval(myInterval);
    console.log("Stopped cycling!");
}, 7000); // after 7 seconds stop cycling