// make text in body tag with h1
const body = document.querySelector("body");
let addDivTag = document.createElement("h1");
let addText = document.createTextNode("Hello!");
addDivTag.appendChild(addText);
document.body.append(addDivTag);

// declare title elements
const title = document.querySelector("h1");
title.style.color = "white"; //change color

// condition for window resize
function windowResizeHandler() {
  const size = window.innerWidth;
  if (size >= 1100) {
    body.style.backgroundColor = "orange";
  } else if (size < 1100 && size >= 600) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "blue";
  }
}

// handling window resize event
window.addEventListener("resize", windowResizeHandler);
