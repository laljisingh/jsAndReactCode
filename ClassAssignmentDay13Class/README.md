# Sample Java Script Projects [Click Me]

Fully Responsive Using HTML and CSS UI Designing
And Java Script


      
- Explanation:-  
This projects Have there are one Main Div and in this main div another div with name *Click Me* , when user can touch or hover this tag, then it will changed our original position in whole body, this operation perform unlimited time and div always changing our original space randomely.

- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssignmentDay13Class/index.html


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
const click = document.getElementById("main");

click.addEventListener("mouseover",()=>{
    const top = Math.floor(Math.random()*100);
    const left = Math.floor(Math.random()*100);
    click.style.top = `${top}%`;
    click.style.left = `${left}%`;
    console.log(top, "=>", left);
})

```


   

## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssignmentDay13Class/Capture.JPG?raw=true)


# ********** **THANKS** *********