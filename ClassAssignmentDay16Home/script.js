const text = document.getElementById("text");
const data = localStorage.getItem("savedValue");
if(data){
    text.value = data;
}

console.log(data);

text.addEventListener("keyup",()=>{
    localStorage.setItem("savedValue", text.value);
    console.log(text.value);
});

