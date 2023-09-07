const btn = document.getElementById("click");
const buttonPressed = document.getElementById("buttonPressed");
const buttonTriggered = document.getElementById("buttonTriggered");


var pressedCount = 0;
var trigeredCount = 0;



  // const variableToStoreDebounceFunction = myDebounceFunction(() => {
//   buttonTriggered.innerText = ++trigeredCount;
// }, 800);

const myDebounceFunction = (callbackFunction, delay) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFunction();
    }, delay);
};
};
const variableToStoreDebounceFunction  = myDebounceFunction(()=>{
    console.log(++trigeredCount);
    buttonTriggered.innerText = ++trigeredCount;
},800);


btn.addEventListener("click", () => {
    buttonPressed.innerText = ++pressedCount;
    console.log(++pressedCount);
    variableToStoreDebounceFunction();
//   variableToStoreThrottleFunction()
  });
