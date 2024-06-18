/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => {
    // data is the JSON object returned by the API
    const pokemonname = data.name;
    const spriteURL = data.sprites.front_default;
    const spriteBackIMGURL = data.sprites.back_default;
    console.log(pokemonname);
  })
*/

/*
async function fetchPokemonData(pokemonName) { 
    try { const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); 
    const data = await response.json(); 
    const pokemonInfo = { 
      name: data.name, 
      spriteURL: data.sprites.front_default, 
      spriteBackIMGURL: data.sprites.back_default, }; 
      console.log(pokemonInfo); 
    }}
    // Log the pokemonInfo to the console return pokemonInfo; } catch (error) { console.error("Error fetching the Pokémon data:", error); } } 
    // Example usage: fetchPokemonData("pikachu")
*/

/*
async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await response.json();
    return data;
}
fetchPokemonData().then((data) => console.log(data));
*/

/*
async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await response.json();
    const pokemonInfo = {
        name: data.name
    }
    return pokemonInfo;
}
fetchPokemonData().then((pokemonInfo) => console.log(pokemonInfo.name));
*/

/*
async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await response.json();
    const pokemonInfo = {
        name: data.name,
        imageURL: data.sprites.front_default
    }
    return pokemonInfo;
}
fetchPokemonData().then(pokemonInfo => {
    console.log(pokemonInfo.imageURL)
});
*/


async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await response.json();
    const pokemonInfo = {
        name: data.name,
        imageURL: data.sprites.front_default
    }
    return pokemonInfo;
}

async function DisplayData() {
    const pokemonInfo = await fetchPokemonData();
    console.log(pokemonInfo.name);
}
DisplayData();