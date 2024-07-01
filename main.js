// 16 x 16 Grid

// Target the container div in the html file
// Create 16x16=256 div elements in JS and insert them dynamically
// Style elements so the div elements have a border

// Store the div element in the html file to a variable
const container = document.querySelector("#container");

// Loop to create 256 div elements within the container div
for (let i=0; i<256; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add('grid');
    newDiv.textContent = `${i}`;
}

// CSS
// 16 elements per row
// Flexbox dynamically change as the window changes