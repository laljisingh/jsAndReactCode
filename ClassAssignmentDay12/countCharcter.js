const button = document.getElementById("button");
const textBox=document.getElementById("text");
const total = 20;


textBox.addEventListener("keypress",(e)=>{
    const textV= textBox.value;
    if(textV.length==total){
        e.preventDefault();
    }
    const p = document.getElementById("p");
    p.innerText = textV.length;
    const p1 = document.getElementById("p1");
    p1.innerText = total-textV.length;
})
textBox.addEventListener("keyup",(e)=>{
    const textV= textBox.value;
    if(textV.length==total){
        e.preventDefault();
    }
    const p = document.getElementById("p");
    p.innerText = textV.length;
    const p1 = document.getElementById("p1");
    p1.innerText = total-textV.length;
})