// Store the div element in the html file to a variable
const container = document.querySelector("#container");

// Loop to create 256 div elements within the container div
for (let i=0; i<256; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add('grid');
    newDiv.textContent = `${i}`;
    newDiv.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = "black";
    });
}

// hover element to change div color when mouse passes over
// eventListener - mouse hover
    // function to change background color
