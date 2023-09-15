# Sample Java Script Projects [Infinite Scrolling]

Fully Responsive Using HTML and CSS UI Designing [Infinite Scrolling]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/HomeAssignmentDay15/Capture.JPG?raw=true)



      
- Explanation:-  
This project is based on a scrolling criteria where, as the user scrolls down, additional content is loaded. In my project, when the user scrolls down, it loads extra images. The project is implemented in JavaScript. This is a brief introduction to my project.

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
const container = document.getElementById("container");

const url =
  "https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=20";

const fetchImage = () => {
  const image = fetch(url);
  image
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((data) => {
      console.log(data);
      data.map((ele) => {
        console.log(ele.urls.small);
        const img = document.createElement("img");
        img.src = ele.urls.small;
        container.appendChild(img);
      });
    });
  console.log(image);
};

window.addEventListener("scroll", () => {
  console.log(window.innerHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchImage();
  }
});

fetchImage();
```


   



# ********** **THANK YOU** *********