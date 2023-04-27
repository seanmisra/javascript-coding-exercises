function findPairs(arr, targetVal) {
    const allPairs = []
    arr.forEach((val, index) => {
        arr.forEach((valTwo, indexTwo) => {
            // second condition helps avoid duplicates
            if (index !== indexTwo && index > indexTwo) {
                if (val + valTwo === targetVal) {
                    const newPair = [val, valTwo];
                    if (checkPairDoesNotExist(allPairs, newPair)) {
                        allPairs.push(newPair);
                    }
                }
            }
        });
    });
    return allPairs;
}

// avoid all repeats (including flipped)
function checkPairDoesNotExist(arr, arrPair) {
    return arr.every(subArr => JSON.stringify(subArr) !== JSON.stringify(arrPair))
        && 
        arr.every(subArr => JSON.stringify(subArr.reverse()) !== JSON.stringify(arrPair))
}

const sampleArr = [1, 5, 5, 9, 7, 3];
const allPairs = findPairs(sampleArr, 10);
console.log(allPairs);

const sampleArrTwo = [20, 0, 10, 10, 10, 10, 5, 15, 7, 2];
const allPairsTwo = findPairs(sampleArrTwo, 20);
console.log(allPairsTwo);

const sampleArrThree = [15, 15, 20, 10, 5, 25, 25, 5, 9, 35, 12, -5];
const allPairsThree = findPairs(sampleArrThree, 30);
console.log(allPairsThree);