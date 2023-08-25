const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    const colorval = document.getElementById("color");
    const text= document.getElementById("text");
    const div1 = document.createElement("div");
    div1.style.padding="30px";
    div1.style.float = "left";
    div1.style.width = "auto";
    const p = document.createElement("p");
    p.innerText = text.value;
    // div1.innerText = ;
    div1.appendChild(p);
    div1.style.margin = "5px"
    div1.style.backgroundColor = colorval.value;

    const res=document.getElementById("result");
    res.appendChild(div1);

    console.log(text.value);
})

// console.log(colorval.value);
