function bubbleSort(arr) {
    let swapped = false;

    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            const valOne = arr[i];
            const valTwo = arr[i + 1];

            if (valOne > valTwo) {
                arr[i] = valTwo;
                arr[i + 1] = valOne;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const testArr = [4, 5, 1, 9, 10, 6, 20, 50, 3];
const sortedArr = bubbleSort(testArr);
console.log(sortedArr);


const testArrTwo = [423, 23, 3434, 2, 5, 112, 9, 44, 2, 5, 1, 2];
const sortedArrTwo = bubbleSort(testArrTwo);
console.log(sortedArrTwo);