const test = "hello";


// will output 1 / 2 / 3
switch (test) {
    case "hello":
        console.log(1);
        // purposely omit break
    case "greetings":
        console.log(2);
        //purposely omit break
    case "bonjour":
        console.log(3);
        break;
    case "goodbye":
        console.log(4);
        break;
    default:
        console.log("ERROR");
}