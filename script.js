console.log("Script Started");

// Main function
function start() {
    console.log("click");
    console.log();
    createCircle();

}

// Function to create a circle
function createCircle() {
    // Create a div for the circle
    let circle = document.createElement("div");

    // Set text and styles
    circle.innerText = "";
    circle.style.borderRadius = "25px";
    circle.style.backgroundColor = "blue";
    circle.style.width = "45px";
    circle.style.height = "45px";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    // Position circle randomly using absolute
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";
    circle.style.right = getRandomY() + "px";
    circle.style.bottom = getRandomX() + "px";

    // Add it to the page
    document.body.appendChild(circle);
}

// Function to randomize the circle's X
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX; 
}

// Function to randomize the circle's Y
function getRandomY() {
    let randY = Math.random * window.innerHeight;
    return randY;
}