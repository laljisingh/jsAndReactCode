# Tips Finder Project 
 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssignmentDay12/Capture.JPG?raw=true)
      
- ## Explanation:-  
In this projects it is a real time character counter if user can type more than or equal to its defined or limit value then in this text area stop the accepting the character, this is the project and i am also attaching a screen shot of projects and all functionality are mentioned below--- 

- Fully Responsive Using HTML and CSS UI Designing
And Java Script



- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssignmentDay12/countCharcter.html


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

```



# ********** **THANKS** *********