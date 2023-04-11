// pass via individual values
restTest("a", "b", "c", "d", "e");

// pass via array/spread syntax
let letters = ["a", "b", "c", "d", "e"];
restTest(...letters);

function restTest(...letters) {
    letters.forEach(char => console.log(char));
}