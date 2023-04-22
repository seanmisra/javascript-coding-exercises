class Animal {
    constructor(name, animalType, isPet = false, canFly = false) {
        this.name = name;
        this.animalType = animalType;
        this.isPet = isPet;
        this.canFly = canFly;
    }
}

const myDog = new Animal("Spot", "canine", true);
const myCat = new Animal("Furry", "feline", true);
const myParrot = new Animal("Polly", "bird", true, true);
const myLion = new Animal("Roary", "lion");

const allAnimals = [myDog, myCat, myParrot, myLion];

// NOW sort these four by name
allAnimals.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});

console.log(allAnimals);