const click = document.getElementById("main");

click.addEventListener("mouseover",()=>{
    const top = Math.floor(Math.random()*100);
    const left = Math.floor(Math.random()*100);
    click.style.top = `${top}%`;
    click.style.left = `${left}%`;
    console.log(top, "=>", left);
})