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

    pokemonDetails.map((pokemon) => {
      createPokemonCard(pokemon);
    });
  });
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchBar = document.getElementById("searchBar");

  if (searchBar.value == undefined) {
    pokemonDetails.map((pokemon) => {
      createPokemonCard(pokemon);
      console.log("-------------");
    });
  } else {
    

    const res = pokemonDetails.filter((e) => {
      return e.name.includes(searchBar.value.toLocaleLowerCase());
    });
    res.map((ele) => {
      createPokemonCard(ele);
    });

  }
});

const createPokemonCard = (pokemon) => {
  const result = document.getElementById("resultContaier");
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <span class="ids">${pokemon["id"]}</span>
    <h3>${pokemon["name"]}</h3>
        <img src="${pokemon["frontShinyImg"]}"/>
        <p class="types">${pokemon["types"]}</p>
        <p>${pokemon.abilities[0]}</p>
    `;
  result.appendChild(card);
  // console.log(pokemon);
};

fetchPokemonDetails();
