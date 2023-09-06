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

