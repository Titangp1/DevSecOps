// Exercice 1 : Découvrir JavaScript
// Objectif : afficher le nom de mon Pokémon préféré dans la console (F12).

// const : valeur qui ne change pas / let : valeur qui peut changer
const nomDresseur = "Sacha";           // texte (string)
const pokemonPrefere = "Pikachu";        // texte (string)
let niveau = 25;                         // nombre (number)
const estShiny = false;                  // booléen (boolean)
let pokemonChoisi = null;                // null : absence volontaire de valeur

// Fonction qui affiche le Pokémon préféré dans la console
function afficherPokemonPrefere(nom, niveauPokemon) {
  if (nom === null || nom === "") {
    console.log("Choisis un Pokémon avant de continuer.");
  } else if (nom === "Pikachu") {
    console.log("Pikachu, je te choisis !");
    console.log("Mon Pokémon préféré est " + nom + ", il est au niveau " + niveauPokemon + ".");
  } else {
    console.log(`Mon Pokémon préféré est ${nom}, il est au niveau ${niveauPokemon}.`);
  }
}

console.log("Dresseur :", nomDresseur);
console.log("Shiny ?", estShiny);

afficherPokemonPrefere(pokemonChoisi, niveau); // cas null -> message d'avertissement
pokemonChoisi = pokemonPrefere;
afficherPokemonPrefere(pokemonChoisi, niveau);
