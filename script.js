// Exercice 1 : Cat Facts API
const bouton = document.getElementById("btn-catfact");
const zoneFact = document.getElementById("catfact");

bouton.addEventListener("click", async () => {
  zoneFact.textContent = "Chargement...";
  try {
    const reponse = await fetch("https://catfact.ninja/fact");
    if (!reponse.ok) {
      throw new Error("Erreur HTTP " + reponse.status);
    }
    const data = await reponse.json();
    zoneFact.textContent = data.fact;
  } catch (erreur) {
    zoneFact.textContent = "Impossible de récupérer un fait : " + erreur.message;
  }
});

// Exercice 2 : PokéAPI
const boutonPokemon = document.getElementById("btn-pokemon");
const champPokemon = document.getElementById("nom-pokemon");
const zonePokemon = document.getElementById("resultat-pokemon");

boutonPokemon.addEventListener("click", async () => {
  const nom = champPokemon.value.trim().toLowerCase();
  if (nom === "") {
    zonePokemon.textContent = "Écris le nom ou le numéro d'un Pokémon.";
    return;
  }

  zonePokemon.textContent = "Chargement...";
  try {
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + encodeURIComponent(nom));
    if (reponse.status === 404) {
      throw new Error("Pokémon introuvable");
    }
    if (!reponse.ok) {
      throw new Error("Erreur HTTP " + reponse.status);
    }
    const pokemon = await reponse.json();
    afficherPokemon(pokemon);
  } catch (erreur) {
    zonePokemon.textContent = "Impossible de récupérer le Pokémon : " + erreur.message;
  }
});

// Construit l'affichage sans innerHTML (pas d'injection de HTML venant de l'API)
function afficherPokemon(pokemon) {
  zonePokemon.textContent = "";

  const titre = document.createElement("h3");
  titre.textContent = "#" + pokemon.id + " " + pokemon.name;

  const image = document.createElement("img");
  image.src = pokemon.sprites.front_default;
  image.alt = "Sprite de " + pokemon.name;

  const types = document.createElement("p");
  types.textContent = "Type : " + pokemon.types.map((t) => t.type.name).join(", ");

  const liste = document.createElement("ul");
  for (const s of pokemon.stats) {
    const ligne = document.createElement("li");
    ligne.textContent = s.stat.name + " : " + s.base_stat;
    liste.appendChild(ligne);
  }

  zonePokemon.append(titre, image, types, liste);
}
