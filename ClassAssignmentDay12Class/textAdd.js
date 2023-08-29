const button = document.getElementById("button");

button.addEventListener("click", () => {
  const colorval = document.getElementById("color");
  const text = document.getElementById("text");
  const div1 = document.createElement("div");
  if (text.value !== '') {
    div1.style.padding = "30px";
    div1.style.height = "150px";
    div1.style.borderTop = "5px solid red";
    const p = document.createElement("p");
    p.innerText = text.value;
    div1.appendChild(p);
    div1.style.margin = "10px";
    div1.style.width = "250px";
    div1.style.backgroundColor = colorval.value;

    const res = document.getElementById("result");

    res.style.display = "flex";
    res.style.flexWrap = "wrap";
    res.style.padding = "0px 50px";
    res.style.justifyContent = "center";
    res.style.alignItems = "center";
    res.prepend(div1);
    text.value = "";
    console.log(text.value);
  }else{
    alert("You can't add Empty Text")
  }
});

// console.log(colorval.value);
