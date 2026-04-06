console.log("Script Started");

// Main function
function start() {
    console.log("click");
    console.log();
    setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);


}

// Function to create a circle
function createCircle(num) {
    // Create a div for the circle
    let circle = document.createElement("div");

    // Set text and styles
    circle.innerText = num;
    circle.style.borderRadius = "40px";
    circle.style.backgroundColor = "blue";
    circle.style.width = "80px";
    circle.style.height = "80px";
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

    // Make circles clickable
    circle.addEventListener("click", checkForRemove);
}

// Function to randomize the circle's X
function getRandomX() {
    let randX = Math.random() * (window.innerWidth - 100);
    return randX; 
}

// Function to randomize the circle's Y
function getRandomY() {
    let randY = Math.random * (window.innerHeight - 100);
    return randY;
}

// Checks if circles are clicked in the correct order and removes them
function checkForRemove(event) {
    let circle = event.target;
    console.log(circle.innerText);
}