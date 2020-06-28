const search = document.querySelector('#pokemon-search-form')
const pokemonContainer = document.querySelector('#pokemon-container')
const pokemonInput = document.querySelector('#pokemon-search-input')

POKEMON.forEach(item => {
  renderPokemon(item)
})

search.addEventListener('input', e => {
  if (pokemonInput.value) {
    pokemonContainer.innerHTML = ''
    let filtered = filterPokemon(POKEMON, pokemonInput.value)
    if (filtered.length === 0) {
      pokemonContainer.innerHTML = `
        <p><center>There are no Pokémon here</center></p>
      `
    } else {
      filtered.forEach(item => {
        renderPokemon(item)
      })
    }
  }
})


function renderPokemon(pokemon) {
  let card = document.createElement('div')
  card.className = "pokemon-card"
  card.innerHTML = `
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
      </div>
    </div>
  `
  pokemonContainer.appendChild(card)
  let spriteyBoi = card.querySelector('.toggle-sprite')
  spriteyBoi.addEventListener('click', e => {
    toggleSprite(spriteyBoi)
  })

  function toggleSprite(element) {
    if (!element.src.includes('back')) {
      element.src = pokemon.sprites.back
    } else {
      element.src = pokemon.sprites.front
    }
  }
}

function filterPokemon(arr, str) {
  return arr.filter(pokemon => pokemon.name.includes(str))
}
