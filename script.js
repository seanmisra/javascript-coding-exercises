getRandomNumb = () => Math.floor(Math.random() * 5) + 1;


// For Testing
const TEST_CASE_COUNT = 10000000;
const allGeneratedNumbs = [];

for (let x = 0; x < TEST_CASE_COUNT; x++) {
    allGeneratedNumbs.push(getRandomNumb());
}

let allOnes = [];
let allTwos = [];
let allThrees = [];
let allFours = [];
let allFives = [];

allOnes = allGeneratedNumbs.filter(x => x === 1);
allTwos = allGeneratedNumbs.filter(x => x === 2);
allThrees = allGeneratedNumbs.filter(x => x === 3);
allFours = allGeneratedNumbs.filter(x => x === 4);
allFives = allGeneratedNumbs.filter(x => x === 5);

onePercentage = allOnes.length / TEST_CASE_COUNT;
twoPercentage = allTwos.length / TEST_CASE_COUNT;
threePercentage = allThrees.length / TEST_CASE_COUNT;
fourPercentage = allFours.length / TEST_CASE_COUNT;
fivePercentage = allFives.length / TEST_CASE_COUNT;

console.log("onePercentage", onePercentage); // roughly .2
console.log("twoPercentage", twoPercentage); // roughly .2
console.log("threePercentage", threePercentage); // roughly .2
console.log("fourPercentage", fourPercentage); // roughly .2
console.log("fivePercentage", fivePercentage); // roughly .2