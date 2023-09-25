let api_key = "0013f985f1023a8cd39a4e31f1ac837b";
let movie_id = "";
(() => {
  var params = new URLSearchParams(window.location.search);
  movie_id = params.get("id");
})();

// console.log(movie_id);

var detailsRequest =
  "https://api.themoviedb.org/3/movie/" +
  movie_id +
  "?language=en-US&api_key=" +
  api_key;

const data = fetch(detailsRequest);
data
  .then((ele) => {
    return ele.json();
  })
  .then((ele) => {
    let poste = "";
    if(ele["backdrop_path"]!=null){
        poste = `https://image.tmdb.org/t/p/w342/${ele["backdrop_path"]}`;
    }else{
        poste = "https://www.incluvie.com/build/public/img/NoImage_r.jpg";
    }

    document.getElementById("poster").src =`${poste}`;
    document.getElementById("story").innerText = `
    ${ele["overview"]}  
    `;
    
    // movie name 
    const rightSideDiv = document.getElementById("rightSideDiv");
        const h2 = document.createElement("h2");
        h2.innerHTML = `
        Movie Name : - ${ele["original_title"]}
        `;
        rightSideDiv.prepend(h2);

        console.log(ele);

  });

//castst memberr
var requestCity =
  "https://api.themoviedb.org/3/movie/" +
  movie_id +
  "/credits?language=en-US&api_key=" +
  api_key;

function moviecredits() {
  var requestCity =
    "https://api.themoviedb.org/3/movie/" +
    movie_id +
    "/credits?language=en-US&api_key=" +
    api_key;

  fetch(requestCity).then(function (response) {
    
    
    const gallery = document.getElementById("gallery");
    if (response.ok) {
      response.json().then(function (data) {
        
        for (var i = 0; i < 6; i++) {
          // console.log(data.cast[i]["name"]);
          let profile = "";
          let name  = "";
          if(data.cast[i]["profile_path"] != 'undefined' && data.cast[i]["profile_path"] != null){
            console.log("okkk");
            profile = `https://image.tmdb.org/t/p/w500${data.cast[i]["profile_path"]}`;
          }else{
            profile  = "https://www.incluvie.com/build/public/img/NoImage_r.jpg";
          }

          if(data.cast[i]["name"] != 'undefined'){
            console.log("okkk");
            name = data.cast[i]["name"];
          }else{
            name  = "no name";
          }

          const photo_item = document.createElement("div");
          photo_item.classList.add("photo-item");
          photo_item.innerHTML = `
          <img src="${profile}" alt="Photo 1" class="photo-img">
          <div class="photo-name">${name}</div>
          `;
          gallery.appendChild(photo_item);
        }
      });
    } else {
      // alert("Error: " + response.statusText);
    }
  });
}
// recommended types moviess

function Recommendations() {
  var requestRecommendation =
    "https://api.themoviedb.org/3/movie/" +
    movie_id +
    "/recommendations?&api_key=" +
    api_key;
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDEzZjk4NWYxMDIzYThjZDM5YTRlMzFmMWFjODM3YiIsInN1YiI6IjY1MDJhNDA2ZDdkY2QyMDEzOWNiZjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tpy6ccnndkJbgDc8st3pd_YqsnaUTPcqVZ1m5tzAJZ4'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?language=en-US&page=1`, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      var createRecommendation = document.getElementById("photo-gallery");
        data.results.map((ele)=>{
          // console.log(ele);
          const card = document.createElement("div");
        card.classList.add("photo-item");
        let title = "";
        if (ele["original_name"] == undefined) {
          title = ele["original_title"];
        } else if (ele["original_title"] == undefined) {
          title = ele["original_name"];
        } else {
          title = ele["name"];
        }

        let poster = "";
        if(ele["backdrop_path"]!=null){
            poster = `https://image.tmdb.org/t/p/w342/${ele["backdrop_path"]}`;
        }else{
            poster = "https://www.incluvie.com/build/public/img/NoImage_r.jpg";
        }
        card.innerHTML = `
        <img src="${poster}" alt="Photo 1" class="photo-img">
          <div class="overlay">
              <div class="overlay-content">
                  <h3 class="photo-title">${title}</h3>
                  <a href="./details.html?id=${ele["id"]}" class="overlay-link">Details</a>
              </div>
          </div>
        `;

        createRecommendation.appendChild(card);

        });
    })
    .catch(err => console.error(err));
    
}

moviecredits();
Recommendations();
