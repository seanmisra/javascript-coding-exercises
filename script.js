class Animal {
    constructor(name, animalType, isPet = false, canFly = false) {
        this.name = name;
        this.animalType = animalType;
        this.isPet = isPet;
        this.canFly = canFly;
    }
}

const myDog = new Animal("Spot", "canine", true);
console.log(myDog); // canFly will default to false