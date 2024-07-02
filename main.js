// Store the div element in the html file to a variable
const container = document.querySelector("#container");

// Button at the top of the screen
// Button click triggers a popup - "How many squares per side?"
// The number entered removes the existing grid and creates a new grid with the correct number of squares
    // Change the flex-basis property to js

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Click Here To Begin";

button.addEventListener("click", function(e){
    let gridSize = prompt("How many boxes would you like?", "16x16");
});


// Loop to create 256 div elements within the container div
for (let i=0; i<256; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add('grid');
    newDiv.textContent = `${i}`;
    newDiv.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = "black";
    });
};