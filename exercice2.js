// Exercice 2 : Manipuler des tableaux et objets
// Objectif : stocker cinq Pokémon dans un tableau d'objets et les afficher dans la console (F12).

// Tableau [ ] contenant cinq objets { }
const equipePokemon = [
  { nom: "Pikachu", type: "Électrik", niveau: 25, estShiny: false },
  { nom: "Dracaufeu", type: "Feu", niveau: 36, estShiny: true },
  { nom: "Bulbizarre", type: "Plante", niveau: 14, estShiny: false },
  { nom: "Carapuce", type: "Eau", niveau: 16, estShiny: false },
  { nom: "Ectoplasma", type: "Spectre", niveau: 42, estShiny: true }
];

// Accéder à une propriété d'un objet dans le tableau
console.log("Premier Pokémon de l'équipe :", equipePokemon[0].nom);

// forEach() : parcourir le tableau et afficher chaque Pokémon dans la console
console.log("--- Liste complète des Pokémon ---");
equipePokemon.forEach((pokemon) => {
  console.log(`${pokemon.nom} (${pokemon.type}) - Niveau ${pokemon.niveau}`);
});

// map() : créer un nouveau tableau contenant uniquement les noms des Pokémon
const nomsPokemon = equipePokemon.map((pokemon) => pokemon.nom);
console.log("Noms des Pokémon :", nomsPokemon);

// filter() : filtrer les Pokémon ayant un niveau supérieur ou égal à 25
const pokemonPuissants = equipePokemon.filter((pokemon) => pokemon.niveau >= 25);
console.log("Pokémon niveau 25+ :", pokemonPuissants);