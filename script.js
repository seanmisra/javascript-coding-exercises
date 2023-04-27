async function getMockData() {
    const url = "https://dummy.restapiexample.com/api/v1/employees";

    let response;
    try {
        response = await fetch(url);
        const json = await response.json();
        console.log("RESPONSE:")
        console.log(json);
        console.log("DATA:")
        console.log(json.data)
    } catch (error) {
        console.log("ERROR: ");
        console.log(error.message);
    }

    // mock API will return 429 if called too often
    if (response.status === 429) {
        console.log("Too many requests. Please try again in ~ minute");
    }
}

getMockData();