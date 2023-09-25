// let root = document.getElementById("root");
// console.log(root);
// let createDiv = document.createElement("div");
// let newdiv = document.createElement("p");
// newdiv.innerText= "Badgaon  ";
// createDiv.innerText = "Hi lal ji singh";
// console.log(createDiv);
// createDiv.style.color = "Red";
// createDiv.style.padding="150px"
// // createDiv.style.background="black";
// // root.prepend(createDiv);
// // root.appendChild(createDiv);
// // root.prepend(newdiv);
// let butto = document.createElement("button");
// butto.innerText = "Click me !!";
// root.appendChild(butto);

// let cnt = 1;
// butto.addEventListener("click", ()=>{
//     let div1 = document.createElement("div");
//     div1.innerText = `Hi i m div tag no is : ${cnt}`;
//     let p=document.createElement("p");
//     p.innerText = "hi am p tag";
//     div1.appendChild(p);
//     root.appendChild(div1);
//     cnt++;
// });

let data = new Promise(function(resolve, reject){
    setTimeout(()=>{
       resolve("h i am done"); 
    },2000);
});
console.log(data);