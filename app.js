// lista pokemona

let bulbasaur = {
  ime: "Bulbasaur",
  vrsta: "Grass",
  sposobnosti: ["Overgrow", "Chlorophyll"],
  karakteristike: {
    napad: 49,
    odbrana: 49,
    brzina: 45,
  },
};

let charizard = {
  ime: "Charizard",
  vrsta: "Fire",
  sposobnosti: ["Blaze", "Solar Power"],
  karakteristike: {
    napad: 84,
    odbrana: 78,
    brzina: 100,
  },
};

let pikachu = {
  ime: "Pikachu",
  vrsta: "Electric",
  sposobnosti: ["Static", "Lightning Rod"],
  karakteristike: {
    napad: 55,
    odbrana: 40,
    brzina: 90,
  },
};

let gyarados = {
  ime: "Gyarados",
  vrsta: "Water",
  sposobnosti: ["Intimidate", "Moxie"],
  karakteristike: {
    napad: 125,
    odbrana: 79,
    brzina: 81,
  },
};

let eevee = {
  ime: "Eevee",
  vrsta: "Normal",
  sposobnosti: ["Run Away", "Adaptability", "Anticipation"],
  karakteristike: {
    napad: 55,
    odbrana: 50,
    brzina: 55,
  },
};
let pokemoni = [bulbasaur, charizard, pikachu, gyarados, eevee];
console.log(pokemoni);

// Izbor pokemona i protivnika

// kontejner div-ovi

// pokemoni

const mainDiv = document.createElement("div");
mainDiv.classList.add("main");

const pokemonDiv = document.createElement("div");
pokemonDiv.classList.add("pokemonDiv");

const dugmePokemonDiv = document.createElement("div");
dugmePokemonDiv.classList.add("dugmePokemon");

const birajPokemona = document.createElement("div");
birajPokemona.classList.add("birajPokemona");

const statistikePokemona = document.createElement("div");
statistikePokemona.classList.add("statistikePokemona");

pokemonDiv.append(dugmePokemonDiv, birajPokemona, statistikePokemona);

// protivnici

const protivnikDiv = document.createElement("div");
protivnikDiv.classList.add("protivnikDiv");

const dugmeProtivnikDiv = document.createElement("div");
dugmeProtivnikDiv.classList.add("dugmeProtivnik");

const birajProtivnika = document.createElement("div");
birajProtivnika.classList.add("birajProtivnika");

const statistikeProtivnika = document.createElement("div");
statistikeProtivnika.classList.add("statistikeProtivnika");

protivnikDiv.append(dugmeProtivnikDiv, birajProtivnika, statistikeProtivnika);

mainDiv.append(pokemonDiv, protivnikDiv);

document.body.prepend(mainDiv);

// startni dugmici

const prikaziPokemoneDugme = document.createElement("button");
prikaziPokemoneDugme.classList.add("prikaziPokemone");
prikaziPokemoneDugme.textContent = "Prikazi Pokemone";
dugmePokemonDiv.append(prikaziPokemoneDugme);

const prikaziProtivnikeDugme = document.createElement("button");
prikaziProtivnikeDugme.classList.add("prikaziProtivnike");
prikaziProtivnikeDugme.textContent = "Prikazi Protivnike";
dugmeProtivnikDiv.append(prikaziProtivnikeDugme);

// event listeneri

// pokemoni

prikaziPokemoneDugme.addEventListener("click", function () {
  pokemoni.forEach(function (element, index) {
    const izaberiMene = document.createElement("button");
    izaberiMene.classList.add("izaberiMene");
    izaberiMene.textContent = element.ime;
    birajPokemona.append(izaberiMene);
    izaberiMene.addEventListener("click", function (e) {
      const imePokemona = document.createElement("p");
      imePokemona.textContent = `Ime: ${element.ime}`;

      const listaSposobnostiPokemona = document.createElement("p");
      listaSposobnostiPokemona.textContent = `Sposobnosti: ${element.sposobnosti.join(
        ", "
      )}`;

      const napadPokemona = document.createElement("p");
      napadPokemona.textContent = `Napad: ${element.karakteristike.napad}`;

      const odbranaPokemona = document.createElement("p");
      odbranaPokemona.textContent = `Odbrana: ${element.karakteristike.odbrana}`;

      const brzinaPokemona = document.createElement("p");
      brzinaPokemona.textContent = `Brzina: ${element.karakteristike.brzina}`;

      statistikePokemona.append(
        imePokemona,
        listaSposobnostiPokemona,
        napadPokemona,
        odbranaPokemona,
        brzinaPokemona
      );
    });
  });
});

// protivnici

prikaziProtivnikeDugme.addEventListener("click", function () {
  pokemoni.forEach(function (element, index) {
    const izaberiMene = document.createElement("button");
    izaberiMene.classList.add("izaberiMene");
    izaberiMene.textContent = element.ime;
    birajProtivnika.append(izaberiMene);
    izaberiMene.addEventListener("click", function (e) {
      const imeProtivnika = document.createElement("p");
      imeProtivnika.textContent = `Ime: ${element.ime}`;

      const listaSposobnostiProtivnika = document.createElement("p");
      listaSposobnostiProtivnika.textContent = `sposobnosti: ${element.sposobnosti.join(
        ", "
      )}`;

      const napadProtivnika = document.createElement("p");
      napadProtivnika.textContent = `Napad: ${element.karakteristike.napad}`;

      const odbranaProtivnika = document.createElement("p");
      odbranaProtivnika.textContent = `Odbrana: ${element.karakteristike.odbrana}`;

      const brzinaProtivnika = document.createElement("p");
      brzinaProtivnika.textContent = `Brzina: ${element.karakteristike.brzina}`;

      statistikeProtivnika.append(
        imeProtivnika,
        listaSposobnostiProtivnika,
        napadProtivnika,
        odbranaProtivnika,
        brzinaProtivnika
      );
    });
  });
});
