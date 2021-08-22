let bulbasaur = {
  ime: "Bulbasaur",
  vrsta: "Grass",
  boja: "paleTurquoise",
  sposobnosti: ["Overgrow", "Chlorophyll"],
  karakteristike: {
    hp: 45,
    napad: 49,
    odbrana: 49,
    brzina: 45,
  },
};

let charizard = {
  ime: "Charizard",
  vrsta: "Fire",
  boja: "aquamarine",
  sposobnosti: ["Blaze", "Solar Power"],
  karakteristike: {
    hp: 78,
    napad: 84,
    odbrana: 78,
    brzina: 100,
  },
};

let pikachu = {
  ime: "Pikachu",
  vrsta: "Electric",
  boja: "lemonChiffon",
  sposobnosti: ["Static", "Lightning Rod"],
  karakteristike: {
    hp: 35,
    napad: 55,
    odbrana: 40,
    brzina: 90,
  },
};

let gyarados = {
  ime: "Gyarados",
  vrsta: "Water",
  boja: "lightGrey",
  sposobnosti: ["Intimidate", "Moxie"],
  karakteristike: {
    hp: 95,
    napad: 125,
    odbrana: 79,
    brzina: 81,
  },
};

let eevee = {
  ime: "Eevee",
  vrsta: "Normal",
  boja: "lightPink",
  sposobnosti: ["Run Away", "Adaptability", "Anticipation"],
  karakteristike: {
    hp: 55,
    napad: 55,
    odbrana: 50,
    brzina: 55,
  },
};
let pokemoni = [bulbasaur, charizard, pikachu, gyarados, eevee];

// main player buttons
const mainPlayerButton1 = document.querySelector(".display-player1");
const mainPlayerButton2 = document.querySelector(".display-player2");

// list pokemon divs
const listAllPlayer1 = document.querySelector(".player1-list");
const listAllPlayer2 = document.querySelector(".player2-list");

// stat display divs
const statsPlayer1 = document.querySelector(".player1-overview");
const statsPlayer2 = document.querySelector(".player2-overview");

// ready button divs
readyPlayer1 = document.querySelector(".player1-ready");
readyPlayer2 = document.querySelector(".player2-ready");

// start divs
const startPlayer1 = document.querySelector(".start1");
const startPlayer2 = document.querySelector(".start2");

function showAll(
  playerButton,
  pokemons,
  listAll,
  statDiv,
  playerReady,
  startDiv
) {
  // all single Pokemon Buttons
  let allSingleButtons = [];
  playerButton.addEventListener("click", function (e) {
    playerButton.disabled = true;
    pokemons.forEach(function (pokemon) {
      let singleButton = document.createElement("button");
      singleButton.classList.add("single-button");
      singleButton.textContent = pokemon.ime;
      listAll.append(singleButton);
      allSingleButtons.push(singleButton);
      singleButton.addEventListener("click", function (e) {
        allSingleButtons.forEach(function (oneButton) {
          oneButton.style.backgroundColor = "white";
        });
        singleButton.style.backgroundColor = "yellow";
        startDiv.style.backgroundColor = pokemon.boja;
        statDiv.innerHTML = `
        <p>Health Points: ${pokemon.karakteristike.hp}</p>
        <p>Attack Rating: ${pokemon.karakteristike.napad}</p>
        <p>Defense Rating: ${pokemon.karakteristike.odbrana}</p>
        <p>Speed Rating: ${pokemon.karakteristike.brzina}</p>
        <p>Special Abilities: ${pokemon.sposobnosti.join(", ")}</p>
        `;
        playerReady.innerHTML = `
        <button class="ready">Ready to Battle!</button>
        `;
      });
    });
  });
}
showAll(
  mainPlayerButton1,
  pokemoni,
  listAllPlayer1,
  statsPlayer1,
  readyPlayer1,
  startPlayer1
);
showAll(
  mainPlayerButton2,
  pokemoni,
  listAllPlayer2,
  statsPlayer2,
  readyPlayer2,
  startPlayer2
);
