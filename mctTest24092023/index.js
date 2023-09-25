
const allmovies = [];
const searchButton = document.getElementById("search_btn");

function fetchApi() {
    const options = {
        method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDEzZjk4NWYxMDIzYThjZDM5YTRlMzFmMWFjODM3YiIsInN1YiI6IjY1MDJhNDA2ZDdkY2QyMDEzOWNiZjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tpy6ccnndkJbgDc8st3pd_YqsnaUTPcqVZ1m5tzAJZ4",
    },
  };
  fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", options)
    .then((response) => response.json())
    .then((response) => {
      allmovies.push(response.results);

      const cards = document.getElementById("moviesCards");

      allmovies[0].map((ele) => {
        // console.log(ele["poster_path"]);
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("1");
        let title = "";
        if (ele["original_name"] == undefined) {
          title = ele["original_title"];
        } else if (ele["original_title"] == undefined) {
          title = ele["original_name"];
        } else {
          title = ele["name"];
        }

        card.innerHTML = `
        <a href="./details.html?id=${ele["id"]}" target="__blank">
        <div class="card 1">
                <div class="card_image"> <img src="${`https://image.tmdb.org/t/p/w342${ele["poster_path"]}`}" /> </div>
                <div class="card_title title-white">        
                <p>${title}</p>
                </div>
            </div>
        </a>
        `;
        cards.appendChild(card);
      });
    //   console.log(response.results);
    })
    .catch((err) => console.error(err));
}





fetchApi();
const moreButton = document.getElementById("more_movie");
moreButton.addEventListener("click", (e)=>{
    e.preventDefault();
    fetchApi();
});

searchButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const search_Value = document.getElementById("search").value;

    const cards = document.getElementById("searchedMovie");

    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search_Value}&api_key=0013f985f1023a8cd39a4e31f1ac837b`)
    .then((response) => {
        return response.json();
    }).then((ele)=>{
        document.getElementById("error_message").innerText = "";
        document.getElementById("heading").innerHTML=`<span class="searchMessage">You are searching</span> : ${search_Value}`;
        
        if(ele.results.length==0){
            document.getElementById("error_message").innerText = "No result Found";
        }

        console.log(ele);
        cards.innerHTML="";
        ele.results.map((data)=>{

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("1");
        let title = "";
        if (data["original_name"] == undefined) {
          title = data["original_title"];
        } else if (data["original_title"] == undefined) {
          title = data["original_name"];
        } else {
          title = data["name"];
        }

        let poster = "";
        if(data["poster_path"]!=null){
            poster = `https://image.tmdb.org/t/p/w342/${data["poster_path"]}`;
        }else{
            poster = "https://www.incluvie.com/build/public/img/NoImage_r.jpg";
        }

        card.innerHTML = `
        <a href="./details.html?id=${data["id"]}" target="__blank">
        <div class="card 1">
                <div class="card_image"> <img src="${poster}" /> </div>
                <div class="card_title title-white">        
                <p>${title}</p>
                </div>
            </div>
        </a>
        `;

        cards.appendChild(card);
        });
    });
});


// preloader

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  // Hide the preloader
  preloader.style.display = "none";
  
  // Display the content
  content.style.display = "block";
});

