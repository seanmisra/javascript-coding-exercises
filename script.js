class House {
    constructor (windows, doors, rooms) {
        this.windows = windows;
        this.doors = doors;
        this.rooms = rooms;
    }

    openDoor() {
        console.log("Open door");
    }
}

// example of shallow copy 
const houseOne = new House(30, 20, 10);
const houseTwo = houseOne;

houseOne.windows = 18;

// both have 18 windows
console.log(houseOne);
console.log(houseTwo);

// make hard copy with JSON
console.log("WITH JSON functions");
const houseThree = JSON.parse(JSON.stringify(houseOne));
houseOne.windows = 17;

console.log(houseOne);
console.log(houseTwo);
console.log(houseThree); // This will still be 18!

houseOne.openDoor();
houseTwo.openDoor();
try {
    houseThree.openDoor();
} catch {
    console.log("JSON cloning will not clone the methods");
}