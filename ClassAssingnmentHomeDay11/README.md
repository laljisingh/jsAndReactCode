# Tips Finder Project 
 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssingnmentHomeDay11/Capture.JPG?raw=true)

Fully Responsive Using HTML and CSS UI Designing
And Java Script



- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssingnmentHomeDay11/index.html


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
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    const amount = document.getElementById("fee");
    const percent = document.getElementById("service");
    const partner = document.getElementById("partner");
    
    const amt = ((amount.value*percent.value)/100)/partner.value;

    const result = document.getElementById("result");
    const p = document.getElementById("paragraph");
    p.innerText = "Tip Amount!";

    const resultAmt = document.getElementById("resultAmount");
    resultAmt.style.border = "1px solid black";
    resultAmt.innerText = `Rs.${amt}`;
})

```


      
- Explanation:-  
This projects Have functionality to find the tips for waiters, and it is also divide the money accouding to participated Friends/ family,
It is Very easy to use for finding the Tips!!!
   

## Screenshots



# ********** **THANKS** *********