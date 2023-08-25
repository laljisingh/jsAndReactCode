const button = document.getElementById("button");
console.log(button);

button.addEventListener("click", ()=>{
    const body = document.getElementById("body");
    const r = Math.random()*50;
    const g = Math.random()*50;
    const b = Math.random()*10;
    body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
});