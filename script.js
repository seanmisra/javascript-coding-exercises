window.onload = () => {
    const helloHeader = document.getElementById("hello-header");
    console.log(helloHeader);
    
    const helloHeaderTwo = document.getElementsByTagName("h1");
    console.log(helloHeaderTwo[0]);
    
    const helloHeaderThree = document.querySelector("#hello-header");
    console.log(helloHeaderThree);
}