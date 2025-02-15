// here we are grabbing the main container div
const containerDiv = document.querySelector(".container");
//one of the boxes for our div

// function for create the divs
function createDiv(num) {
  for (let i = 0; i < num; i++) {
    const boxDiv = document.createElement("div");
    containerDiv.appendChild(boxDiv);

    boxDiv.addEventListener("mouseenter", () => {
      boxDiv.style.backgroundColor = "black";
    });
  }
}
//calling the div size function
createDiv(256);
