const myObj = {
    firstProp: "hello",
    secondProp: 10,
    thirdProp: false
}

console.log(myObj.secondProp); // get prop, 10
console.log(myObj['secondProp']); // get prop alt, 10

const {secondProp} = myObj 
console.log(secondProp); // could also get the prop with destructuring

myObj.secondProp = 20;
console.log(myObj.secondProp); // prop is set to 20
delete myObj.secondProp;
console.log(myObj.secondProp); // prop is now undefined after deleting

console.log(myObj.firstProp); // testing, first prop unaffected