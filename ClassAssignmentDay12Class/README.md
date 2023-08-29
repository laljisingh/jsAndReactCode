# Tips Finder Project 
 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssignmentDay12Class/Capture.JPG?raw=true)
      
- ## Explanation:-  
In this projects it is like a sticky notes type projects user can add over own notes with different color , thats all about my project overview, and all functionality are mentioned below--- 

- Fully Responsive Using HTML and CSS UI Designing
And Java Script



- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssignmentDay12Class/textAdd.html


#### Website Section
* Main Or Body
## Tools
- VS Code
- Google Chrome
## Language & Library
- HTML
- CSS
- Java Script
## function of JS
 ```
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

```



# ********** **THANKS** *********