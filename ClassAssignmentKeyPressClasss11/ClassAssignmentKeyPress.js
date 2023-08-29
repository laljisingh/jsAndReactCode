document.addEventListener("keydown", (e)=>{
    // console.log(e.key,"key pressed");
    const result = document.getElementById("result");

    result.innerHTML=`<p class="p1">You pressed <span style="color:rgb(7, 121, 92);">${e.key}</span></p>
    <p class="p2">${e.keyCode}</p>`;
})