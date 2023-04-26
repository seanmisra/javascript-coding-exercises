let test = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 1, 1, 2, 5];

function countArr(arr) {
    const countMap = new Map();
    arr.forEach(elem => {
        if (countMap.get(elem)) {
            let existingVal = countMap.get(elem);
            existingVal++;
            countMap.set(elem, existingVal++);
        } else {
            countMap.set(elem, 1);
        }
    });

    return countMap;
}

// testing
const countTestArr = countArr(test);
console.log(countTestArr);