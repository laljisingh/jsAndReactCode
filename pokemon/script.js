// console.log("logg");

// console.log(searchBar.value);
const promises = [];
const pokemonDetails = [];

const btn = document.getElementById("search");


const fetchPokemonDetails = () => {
  for (let i = 1; i <= 150; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const promise = fetch(pokemonUrl).then((ele) => {
      return ele.json();
    });
    promises.push(promise);
  }
  Promise.all(promises).then((data) => {
    data.map((ele) => {
      const pokemonObj = {
        frontShinyImg: ele.sprites["front_shiny"],
        id: ele.id,
        name: ele.name,
        abilities: ele.abilities.map((item) => {
          return item.ability.name;
        }),
        // abilities: ele.abilities.map(ele => ele.ability.name),
        types: ele.types[0].type.name,
      };
      pokemonDetails.push(pokemonObj);
    });
    pokemonDetails.map((e)=>{
      // e.preventDefault();
      createPokemonCard(e);
    })
  });
};




const reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("resultContaier").innerHTML = "";
  pokemonDetails.map((pokemon) => {
    createPokemonCard(pokemon);
  });
});



btn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchBar = document.getElementById("searchBar");
  
  if (searchBar.value == '') {
    console.log(searchBar);
    document.getElementById("resultContaier").innerHTML = "";
    pokemonDetails.map((pokemon) => {
      createPokemonCard(pokemon);
      console.log("-------------");
    });
  } else {
    document.getElementById("resultContaier").innerHTML = "";
    const res = pokemonDetails.filter((e) => {
      return e.name.includes(searchBar.value.toLocaleLowerCase());
    });
    if(res.length===0){
      document.getElementById("resultContaier").innerHTML = "";
      document.getElementById("resultContaier").innerHTML = "No pokeman avalable";
    }
    res.map((ele) => {
      createPokemonCard(ele);
      console.log(ele);
    });
    console.log(res.length);

  }
});

const createPokemonCard = (pokemon) => {
  const result = document.getElementById("resultContaier");
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <span class="ids">${pokemon["id"]}</span>
    <h3>${pokemon["name"]}</h3>
   <img src="${pokemon["frontShinyImg"]}"/>
      <p class="types">${pokemon["types"]}</p>
       <p>${pokemon.abilities[0]}</p>
    </div>
    <div class="flip-card-back">
    <span class="ids">${pokemon["id"]}</span>
     <h3>${pokemon["name"]}</h3>
    <img src="${pokemon["frontShinyImg"]}"/>
       <p class="types">${pokemon["types"]}</p>
        <p>${pokemon.abilities[0]}</p>
    </div>
  </div>
</div>
    `;

  result.appendChild(card);
};

fetchPokemonDetails();
// selfCall();


