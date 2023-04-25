// array needs to be sorted
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleVal = arr[middleIndex];
    
    if (val === middleVal) {
        return middleIndex;
    }

    if (start >= end) {
        return -1;
    }

    if (val > middleVal) {
        return binarySearch(arr, val, middleIndex + 1, end);   
    } else {
        return binarySearch(arr, val, start, middleIndex - 1);
    }
}

const testArr = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15];
const foundIndex = binarySearch(testArr, 10);
console.log(foundIndex); // 5

const testArrTwo = [1, 54, 100, 200, 500];
const foundIndexTwo = binarySearch(testArrTwo, 100);
console.log(foundIndexTwo); // 2

const testArrThree = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const foundIndexThree = binarySearch(testArrThree, 10);
console.log(foundIndexThree); // 0