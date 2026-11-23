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
