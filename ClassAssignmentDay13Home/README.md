# Sample Java Script Projects [Mini Calender]

Fully Responsive Using HTML and CSS UI Designing
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssignmentDay13Home/Capture.JPG?raw=true)
And Java Script


      
- Explanation:-  
This projects Have there are one Main Div and in this main div another div like in this div showing a like mini calender and in this calender month name and week day name and date, and in last showing Year like 2023 , this is my projects assigned to me .

- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssignmentDay13Home/index.html


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
const mnt = document.getElementById("month");
const dy = document.getElementById("day");
const dt = document.getElementById("date");
const yr = document.getElementById("year");

const date = new Date();
const year = date.getFullYear();
const dates = date.getDate();

yr.innerText = year
dt.innerText = dates;
mnt.innerText = date.toLocaleString("en", {
  month: "long",
});

dy.innerText = date.toLocaleString("en", {
  weekday: "long",
});


```


   



# ********** **THANK YOU** *********