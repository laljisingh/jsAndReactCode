# Sample Java Script Projects [StopWatch]

Fully Responsive Using HTML and CSS UI Designing
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/StopWatchAssignment/Capture.JPG?raw=true)
And Java Script


      
- Explanation:-  
This projects i have designed stopwatch and this stopwatch works perfectly looks like as a original stopwatch, becouse in here i am designed three buttons like -> Start, Stop, Restart, and these buttons are worked perfectly, so this is my stop watch projects

- Project link :-  https://laljisingh.github.io/jsAndReactCode/StopWatchAssignment/index.html


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
// document.getElementById("start");

// document.getElementById("pause");

// document.getElementById("reset");

var timeStamp = 0;
var interValref = null;

const upDateDom = ()=>{
    let seconds = Math.floor(timeStamp / 100);
  let minutes = Math.floor(seconds / 60);
  let hours = (Math.floor(minutes / 60)<10)?("0"+Math.floor(minutes / 60)):(Math.floor(minutes / 60));
  let mili = (timeStamp % 100)<10?("0"+timeStamp % 100):(timeStamp % 100);
  seconds = (seconds % 60)<10?("0"+seconds % 60):(seconds % 60);
  minutes = (minutes % 60)<10?("0"+minutes % 60):(minutes % 60);

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}:${mili}`;
}
const startHandler = ()=>{
    interValref =  setInterval(()=>{
        timeStamp +=1;
        upDateDom();
        console.log(timeStamp); 
    },10);
    document.getElementById("start").style.backgroundColor="rgb(235, 132, 209)";

    document.getElementById("pause").style.backgroundColor="";

    document.getElementById("reset").style.backgroundColor="";
}

const pauseHandler = ()=>{
    clearInterval(interValref);
    document.getElementById("start").style.backgroundColor="";

    document.getElementById("pause").style.backgroundColor="rgb(235, 132, 209)";

    document.getElementById("reset").style.backgroundColor="";
};
const resetHandler = ()=>{
    timeStamp = 0;
    document.getElementById("clock").innerText = '00:00:00:00';
    clearInterval(interValref);
    document.getElementById("start").style.backgroundColor="";

    document.getElementById("pause").style.backgroundColor="";

    document.getElementById("reset").style.backgroundColor="rgb(235, 132, 209)";
}

document.getElementById("start").addEventListener("click",startHandler);

document.getElementById("pause").addEventListener("click",pauseHandler);

document.getElementById("reset").addEventListener("click",resetHandler);

```


   



# ********** **THANK YOU** *********