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
  const card = document.createElement("div");
  card.classList.add = "card";

  hotels.map((data)=>{

    card.innerHTML = `
    <div class="row g-0">
                   <div class="col-md-4">
                     <img src='${data.image}' class="img-fluid rounded-start" alt="...">
                   </div>
                   <div class="col-md-8">
                     <div class="card-body">
                       <h5 class="card-title">Happy Hotels</h5>
                       <p class="card-text">In this hotels All Service are good</p>
                       <p>Rating : 5 star</p>
                       <p>Price : 25000rs</p>
                       <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                     </div>
                   </div>
                 </div>
                 `;
                 result_bar.appendChild(card);
  });
                 
 
});
