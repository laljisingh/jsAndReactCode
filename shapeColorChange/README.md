# Sample Java Script Projects 

Fully Responsive Using HTML and CSS UI Designing
And Java Script



- Project link :-  https://laljisingh.github.io/jsAndReactCode/shapeColorChange/index.html


#### Website Section
* Main Or Body
## Tools
- VS Code
- Google Chrome
## Language & Library
- HTML
- CSS
- Java Script
## function of JS
 ```
const changeColor = document.getElementById("change-color");
// console.log(changeColor);
changeColor.addEventListener("click", () => {
  const mainDiv = document.getElementById("main");
  const circles = document.getElementById("circles");
  const r = Math.random() * 1000;
  const g = Math.random() * 150;
  const b = Math.random() * 500;
  mainDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  circles.style.backgroundColor = mainDiv.style.backgroundColor;
});

const changeShape = document.getElementById("change-shape");
console.log(changeShape);

changeShape.addEventListener("click", () => {
  const circles = document.getElementById("circles");
  const circle = document.getElementById("circles");
  const normalShape = document.getElementById("normalShape");

  console.error((circles.style.backgroundColor = "red"));
  const m = document.getElementById("main");

  if (circles.style.display === "none") {
    circles.style.display = "block";
    normalShape.style.backgroundColor="red";
    circles.style.backgroundColor = m.style.backgroundColor;
  } else {
    circle.style.display = "none";
    circles.style.display = "none";
    normalShape.style.backgroundColor="aqua";
  }
});

```


      
- Explanation:-  
This projects Have there are two div first is main he is in a circle form and inside this circle there are a square div in this div tag, and in down side there are two Button name is Change color first is for changing the color of circle, and second name is change shape for toggling the square in a triangle forms.
   

## Screenshots

 ![App Screenshot](https://raw.githubusercontent.com/laljisingh/jsAndReactCode/main/shapeColorChange/Capture.JPG)


# ********** **THANKS** *********