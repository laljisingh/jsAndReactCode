//color function
function textColor() {
  var x = document.getElementById("color").value;
  var div = document.getElementById("maindiv");
  console.log(div);
  if (x == "red") {
    div.style.color = "red";
  } else if (x == "pink") {
    div.style.color = "pink";
  } else if (x == "yellow") {
    div.style.color = "yellow";
  } else if (x == "green") {
    div.style.color = "green";
  } else {
    div.style.color = "cyan";
  }
}
//background-color function
function backgroundFUnction() {
  var x = document.getElementById("bg-color").value;
  var div = document.getElementById("maindiv");
  console.log(div);
  if (x == "red") {
    div.style.backgroundColor = "red";
  } else if (x == "pink") {
    div.style.backgroundColor = "pink";
  } else if (x == "yellow") {
    div.style.backgroundColor = "yellow";
  } else if (x == "green") {
    div.style.backgroundColor = "green";
  } else {
    div.style.backgroundColor = "cyan";
  }
}
//padding function
function padding() {
  var x = document.getElementById("padding").value;
  var div = document.getElementById("maindiv");
  console.log(div);
  if (x == 0) {
    div.style.padding = "0px";
  } else if (x == 25) {
    div.style.padding = "25px";
  } else if (x == 50) {
    div.style.padding = "50px";
  } else if (x == 75) {
    div.style.padding = "75px";
  } else {
    div.style.padding = "100px";
  }
}
//font size
function font() {
  var x = document.getElementById("font").value;
  var div = document.getElementById("maindiv");
  // console.log(div);
  if (x == 30) {
    div.style.fontSize = "30px";
  } else if (x == 10) {
    div.style.fontSize = "10px";
  } else if (x == 15) {
    div.style.fontSize = "15px";
  } else if (x == 20) {
    div.style.fontSize = "20px";
  } else {
    div.style.fontSize = "25px";
  }
}
//font weight
function weight() {
  var x = document.getElementById("weight").value;
  var div = document.getElementById("maindiv");
  console.log(x);
  if (x == 500) {
    div.style.fontWeight = "500";
  } else if (x == 600) {
    div.style.fontWeight = "600";
  } else if (x == 700) {
    div.style.fontWeight = "700";
  } else if (x == 800) {
    div.style.fontWeight = "800";
  } else {
    div.style.fontWeight = "900";
  }
}
