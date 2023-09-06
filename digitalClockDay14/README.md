# Sample Java Script Projects [Mini Calender]

Fully Responsive Using HTML and CSS UI Designing [Digit Clock]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/GitHubFinder/Capture.JPG?raw=true)
And Java Script


      
- Explanation:-  
It is just simpli display the clock in the form of Digital Clock

- Project link :-  https://laljisingh.github.io/jsAndReactCode/digitalClockDay14/index.html


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
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    clock();
  }, 1000);
}

clock();
```


   



# ********** **THANK YOU** *********