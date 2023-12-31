const div = document.getElementById("container");
const dataArray = [];

function dataGet() {
  const apiUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=0013f985f1023a8cd39a4e31f1ac837b";

  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.results.map((ele) => {
        dataArray.push(ele);
      });

      function debounce(func, delay) {
        let timer;

        return function () {
          const context = this;
          const args = arguments;

          clearTimeout(timer);

          timer = setTimeout(() => {
            func.apply(context, args);
          }, delay);
        };
      }

      // Usage example:
      const debouncedFunction = debounce(() => {
        console.log("Debounced function executed.");
        search();
        document.getElementById("search").value = "";
      }, 1000);

      document
        .getElementById("btn")
        .addEventListener("click", debouncedFunction);
      function search() {
        const value = document.getElementById("search").value;
        console.log(value);
        const filterArray = dataArray.filter((ele) => {
          console.log(ele["original_title"].includes(value));
          return ele["original_title"]
            .toLowerCase()
            .includes(value.toLowerCase());
        });
        if (filterArray.length > 0) {
          div.innerText = "";
          filterArray.map((ele) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${ele["poster_path"]}" alt="Card Image">
        <div class="card-content">
            <h2 class="card-title">${ele["original_title"]}</h2>
            <p class="card-description"><b>Voting</b> : ${ele["vote_count"]}</p>
            <p class="card-description"><b>Release date : </b>${ele["release_date"]}</p>
            <p class="card-description"><b>Language : </b>${ele["original_language"]}</p>
        </div>
        `;
            div.appendChild(card);
          });
        } else {
          div.innerHTML = "";
          const card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
                <h1>NO result Found</h1>
            `;
          div.appendChild(card);
        }
      }
      dataArray.map((ele) => {
        console.log(ele);

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${ele["poster_path"]}" alt="Card Image">
        <div class="card-content">
            <h2 class="card-title">${ele["original_title"]}</h2>
            <p class="card-description"><b>Voting</b> : ${ele["vote_count"]}</p>
            <p class="card-description"><b>Release date : </b>${ele["release_date"]}</p>
            <p class="card-description"><b>Language : </b>${ele["original_language"]}</p>
        </div>
        `;
        div.appendChild(card);
      });
    });
}
dataGet();
