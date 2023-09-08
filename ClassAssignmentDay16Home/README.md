# Sample Java Script Projects [Auto text Save]

Fully Responsive Using HTML and CSS UI Designing [Auto Text Save]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssignmentDay16Home/Capture.JPG?raw=true)



      
- Explanation:-  
In this project, I am utilizing the browser's local storage as a storage space. I use this storage to store the typed values. If there is any value present in the local storage, it will be displayed in the text area space. Furthermore, if a user attempts to type new text, it will be concatenated with both the typed value and the value stored in local storage. This is the essence of my project.

- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssignmentDay16Home/index.html


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

```


   



# ********** **THANK YOU** *********