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
