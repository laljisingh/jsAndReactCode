const button = document.getElementById("button");
const textBox=document.getElementById("text");
const total = 10;


textBox.addEventListener("keypress",(e)=>{
    const textV= textBox.value;
    if(textV.length==total){
        e.preventDefault();
    }
    const p = document.getElementById("p");
    p.innerText = total;
    const p1 = document.getElementById("p1");
    p1.innerText = total-textV.length;
    const res = document.getElementById("result");
    res.appendChild(p);
    res.appendChild(p1);
})
textBox.addEventListener("keyup",(e)=>{
    const textV= textBox.value;
    if(textV.length==total){
        e.preventDefault();
    }
    const p = document.getElementById("p");
    p.innerText = total;
    const p1 = document.getElementById("p1");
    p1.innerText = total-textV.length;
    const res = document.getElementById("result");
    res.appendChild(p);
    res.appendChild(p1);
})