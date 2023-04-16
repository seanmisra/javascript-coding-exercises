// **callbacks**
function makeFrame (nextStep) {
    setTimeout(() => {
        console.log("made frame");
        nextStep();
    }, 5000);
}

function makeWalls (nextStep) {
    setTimeout(() => {
        console.log("made walls");
        nextStep();        
    }, 5000)
}

function paintHouse () {
    setTimeout(() => {
        console.log("painted house");
        console.log("finished callbacks");
    }, 5000)
}


function buildHouseOne () {
    makeFrame(
        function() { makeWalls(
            function() {
                paintHouse()
            }
        )}
    )       
}
buildHouseOne();



// **Using promises**
function makeFrameTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("made frame");
            resolve();
        }, 5000)
    });
}


function makeWallsTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("made walls");
            resolve();
        }, 5000)
    });
}

function paintHouseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("painted house");
            resolve();
        }, 5000)
    });
}

function buildHouseTwo () {
    return makeFrameTwo().then(() => {
        return makeWallsTwo();
    }).then(() => {
        return paintHouseTwo();
    }).then(() => console.log("finished promise chaining"));
}
buildHouseTwo();


// **using await/async**
async function buildHouseThree () {
    await makeFrameTwo();
    await makeWallsTwo();
    await paintHouseTwo();
    console.log("finished async/await");
}
buildHouseThree();
