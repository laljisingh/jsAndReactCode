
# Hotels Search 

Fully Responsive Using HTML and CSS UI Designing
And Java Script[Hotels Search]

in this projects i am desigining UI Part only as it shown in screenshot

## click on search button 2 times then show the results;

## Screenshots

![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/weeklyTest03092023/Capture.JPG?raw=true)

- Project link :-  https://laljisingh.github.io/jsAndReactCode/weeklyTest03092023/index.html

```
const btn = document.getElementById("search-button");
const hotels = [];

btn.addEventListener("click", () => {
  const url = fetch("https://indianhotels.free.beeceptor.com/gethotels");
  url
    .then((ele) => {
      return ele.json();
    })
    .then((data) => {
      data.map((dt) => {
        hotels.push(dt);
      });
      return data;
    });

  const result_bar = document.getElementById("right");
  

  hotels.map((data) => {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.innerHTML = `
                <div class="row g-0">
                   <div class="col-md-4">
                     <img src='${data.image}' class="img-fluid rounded-start" alt="...">
                   </div>
                   <div class="col-md-8">
                     <div class="card-body">
                       <h5 class="card-title">${data.name}</h5>
                       <p class="card-text">Descreption : ${data.description}</p>
                       <p>Price : ${data.price}rs</p>
                     </div>
                   </div>
                 </div>
                 `;
                 result_bar.appendChild(card);
  });
});




```

#### Website Section
* Main Or Body
## Tools
- VS Code
- Google Chrome
## Language & Library
- HTML
- CSS
- Java Script





# ********** **THANKS** *********






