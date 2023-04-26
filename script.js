function testAnagram(stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return false;
    }

    firstArr = stringA.split("");
    secondArr = stringB.split("");

    firstArr.sort();
    secondArr.sort();

    const test = firstArr.every((elem, index) => {
        return secondArr[index] === elem;
    });
    return test;
}

const str1 = "silent";
const str2 = "listen";

// positive case
const test = testAnagram(str1, str2);
console.log(test);

const str3 = "elbow";
const str4 = "below";

// positive case
const testTwo = testAnagram(str3, str4);
console.log(testTwo);

const str5 = "testing";
const str6 = "testinging";

// negative case
const testThree = testAnagram(str5, str6);
console.log(testThree);