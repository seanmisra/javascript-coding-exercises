const animalObj = {
    type: "dog",
    animalName: "Spot",
    canFly: false,
    canBark: true,
    age: 4,
    traits: ["friendly", "smart", "playful"]
};

const {type, animalName, canFly, canBark, age, traits} = animalObj;

console.log(type);
console.log(animalName);
console.log(canFly);
console.log(canBark);
console.log(age);
console.log(traits);

// could also destructure assigning different names
const {
    type: animalType,
    animalName: thisAnimalName, // avoid duplicate name
    canFly: animalCanFly,
    canBark: animalCanBark,
    age: animalAge,
    traits: animalTraits
} = animalObj;

console.log(animalType);
console.log(thisAnimalName);
console.log(animalCanFly);
console.log(animalCanBark);
console.log(animalAge);
console.log(animalTraits);