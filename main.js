// Store the div element in the html file to a variable
const container = document.querySelector("#container");

// Loop to create 256 div elements within the container div
for (let i=0; i<256; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add('grid');
    newDiv.textContent = `${i}`;
    newDiv.style.flexBasis = '6.25%';

    newDiv.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = "black";
    });
};

// Button to allow users to adjust grid size
const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Click Here To Begin";

button.addEventListener("click", function(e){
    // Sets the grid size
    let gridSize = prompt("How many boxes would you like?", "16x16"); 
    
    // Removes the previous grid
    container.querySelectorAll('.grid').forEach((element) => element.remove());

    // Creates a new grid
    for (let i=0; i<(gridSize*gridSize); i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add('grid');
        newDiv.textContent = `${i}`;

        // Reformats grid to flex equally
        let flexAmount = (1/gridSize)*100;
        newDiv.style.flexBasis = flexAmount.toString() + '%';

        newDiv.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black";
        });
    };
});



