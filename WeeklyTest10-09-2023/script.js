const current = new Date();
const date = current.getDate();
const month = current.getMonth();
const year = current.getFullYear();
const listOfDays = document.querySelectorAll(".days");

for(let i=0 ; i<listOfDays.length ; i++){
    console.log(listOfDays);
}

// ...................................................................................................
function fistDayDate(month, year) {

  listOfDays.forEach((ele) => {
    ele.innerHTML = "";
  });
//   console.log(listOfDays);
  const total = new Date(`${month + 1} 1, ${year} 23:15:30`);
  const day = total.getDay();
  fillDates(day, month, year); 
}
//......................................
function fillDates(day, month, year) {
   
  if (
    month === 0 ||
    month == 2 ||
    month == 4 ||
    month == 6 ||
    month == 7 ||
    month == 9 ||
    month == 11
  ) {
    let count = 1;
    for (var i = day; i < 31 + day; i++) {
      if (i >= day) {
        listOfDays[i].innerText = count;
        count++;
      }
    }
  } else if (month == 1) {
    let count = 1;
    if (year % 4 === 0) {
      for (var i = day; i < 29 + day; i++) {
        if (i >= day) {
          listOfDays[i].innerText = count;
          count++;
        }
      }
    } else {
      for (var i = day; i < 28 + day; i++) {
        if (i >= day) {
          listOfDays[i].innerText = count;
          count++;
        }
      }
    }
  } else {
    let count = 1;
    for (var i = day; i < 30 + day; i++) {
      if (i >= day) {
        listOfDays[i].innerText = count;
        count++;
      }
    }
  }
  lighLight(date);
}
fistDayDate(month, year);
// ..........................................................................................................
function lighLight(date) {
    listOfDays.forEach(ele=>ele.classList.remove("active"))
  listOfDays.forEach((ele) => {
    if (ele.innerHTML == date) {
      ele.classList.add("active");
    }
  });
}

// ..........................................................................................................
function showTheyear() {
  const yearList = document.querySelector(".select-year");
  for (let i = 1900; i < 2100; i++) {
    const option=document.createElement("option")
    option.innerText=i;
    yearList.appendChild(option)
    
  }
}
showTheyear();
// ..........................................................................................
function takeinputs(){
    const month=document.querySelector(".select-month").value;
    const year=document.querySelector(".select-year").value;
    if(month==="Select Month"){
        const newmonth=new Date().getMonth();
        fistDayDate(+newmonth,+year)
    }
    else if(year==="Select Year"){
      const newyear=new Date().getFullYear();
      fistDayDate(+month,+newyear);
    }
    else{
        fistDayDate(+month,+year)
    }
}
document.querySelector(".select-month").addEventListener("change",takeinputs)
document.querySelector(".select-year").addEventListener("change",takeinputs)
// ...............................................................................................
function ValidateDate(e) {
    e.preventDefault();
    const date=document.querySelector(".EnterDate")
    lighLight(date.value)
    date.value=""
}