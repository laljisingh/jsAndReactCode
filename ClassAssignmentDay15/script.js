async function hello(){
    const url =await fetch("https://api.unsplash.com/photos/random?client_id=NBTsuh7R1c4xBe1PG9GAfL2KirDVnMBM2zf184DJD9w&query=car");
    const data =await url.json();
    const image = data["urls"].full;
    document.getElementById("image").src = image;
}

const btn= document.getElementById("buttons");
btn.addEventListener("click",()=>{
    hello();
});






