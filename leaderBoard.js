const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", ()=>{
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const country = document.getElementById("country");
    const score = document.getElementById("score");

    const scoreBoard = document.createElement("div");
    scoreBoard.classList.add("scoreBoard");
    // scoreBoard.style.display = "flex";
    scoreBoard.innerHTML = `
    <p class ="playeName">${fname.value}${lname.value}<p>
    <p class ="coutry">${country.value}<p>
    <p class ="score">${score.value}<p>
    <p class ="deleteIcon"><button>&#x1f5d1;</button><p>
    `;
    const result = document.getElementById("result");
    result.appendChild(scoreBoard);

    fname.value = "";
    lname.value = "";
    country.value = "";
    score.value = "";

    sortBoard();
    deleteElement();
});

function sortBoard(){
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
        // B = CURRENT
        // A = PREV
        // MAN 1 = PREV
        // MAN 2 = CURRENT
  
        // PREV IS COMMING UPAR
        // PREV > CURRENT
        if (runOfManOne > runOfManTwo) {
          return -1;
        }
        // PREV < CURRENT
        if (runOfManOne < runOfManTwo) {
          return 1;
        }
      });
  
    sortedArray.forEach((ele) => {
      result.append(ele);
    });

}
function deleteElement(){
    const deleteElement = document.querySelectorAll(".deleteIcon");
    deleteElement.forEach((ele)=>{
        ele.addEventListener("click",(e)=>{
            // return e.target.parentElement.remove();
            console.log(e.target.parentElement.parentElement.remove());
        });
    })
    // console.log(deleteElement);
}

deleteElement();