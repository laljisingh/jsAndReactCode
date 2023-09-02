# Sample Java Script Projects 

Fully Responsive Using HTML and CSS UI Designing
And Java Script[Leader Board]



## Screenshots

 ![App Screenshot](https://raw.githubusercontent.com/laljisingh/jsAndReactCode/main/shapeColorChange/Capture.JPG)

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
const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", () => {

  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const country = document.getElementById("country");
  let score = document.getElementById("score");

  if(fname.value!='' && lname.value!='' && country.value!='' && score.value!=''){
    const error = document.getElementById("error");
    error.innerHTML = '';

    console.log("okkkkkkkkkkkkkkk");
  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreBoard");
  scoreBoard.innerHTML = `
    <p class ="playeName">${fname.value}${lname.value}<p>
    <p class ="coutry">${country.value}<p>
    <p class ="score" id="sc">${score.value}<p>
    <p class ="deleteIcon"><button>&#x1f5d1;</button><p>
    <p><button id="scoreUp" value="5">+5</button>
    <button id="scoreDown" value="5">-5</button></p>
    `;
  const result = document.getElementById("result");
  result.appendChild(scoreBoard);

  const scoreUp = document.getElementById("scoreUp");
  const scoreDown = document.getElementById("scoreDown");
  // -5 in score
  scoreDown.addEventListener("click", () => {
    if (parseInt(sc.innerText) > 0) {
      const sc = document.getElementById("sc");
      console.log(sc.value);
      sc.innerText = parseInt(sc.innerText) - 5;
    }
  });

  //add 5 in  score
  scoreUp.addEventListener("click", () => {
    const sc = document.getElementById("sc");
    console.log(sc.value);
    sc.innerText = parseInt(sc.innerText) + 5;
  });

  fname.value = "";
  lname.value = "";
  country.value = "";
  score.value = "";

  sortBoard();
  deleteElement();
}else{
  const error = document.getElementById("error")

  error.innerHTML=`<h2 style="color:red">All FieldsMust</h2>`

}
});

function sortBoard() {
  const ScoreBoard = document.querySelectorAll(".scoreBoard");
  const arr = [];
  ScoreBoard.forEach((ele) => arr.push(ele));
  const sortedArray = arr
    .map((ele) => {
      return ele;
    })
    .sort((a, b) => {
      let runOfManOne = parseInt(a.children[2].textContent);
      let runOfManTwo = parseInt(b.children[2].textContent);
      if (runOfManOne > runOfManTwo) {
        return -1;
      }
      if (runOfManOne < runOfManTwo) {
        return 1;
      }
    });

  sortedArray.forEach((ele) => {
    result.append(ele);
  });
}
function deleteElement() {
  const deleteElement = document.querySelectorAll(".deleteIcon");
  deleteElement.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement.remove());
    });
  });
}


```


      
- Explanation:-  
In This projects Generate a leader board , in this project high score player comes in first position, and low score player comes in down position, if any input value are not filled by user then user are not eligible to add its data, so this is my projects 
   


# ********** **THANKS** *********