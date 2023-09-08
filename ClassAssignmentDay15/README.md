# Sample Java Script Projects [Mini Calender]

Fully Responsive Using HTML and CSS UI Designing [Random Image generator]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/HomeAssignmentDay15/Capture.JPG?raw=true)



      
- Explanation:-  
In this project there was a button whose name is _generate random image_ then showing a random image of car [means call an api when click the button] this functionality i was used.

- Project link :-  https://laljisingh.github.io/jsAndReactCode/HomeAssignmentDay15/index.html


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

```


   



# ********** **THANK YOU** *********