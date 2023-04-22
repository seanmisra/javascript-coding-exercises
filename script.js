// wrap so that body is defined
window.onload = function() {
    // window is for BOM; innerHeight is an example prop
    console.log(window.innerHeight);

    // document is for DOM; offsetHeight is an exampel prop
    console.log(document.body.offsetHeight);
};