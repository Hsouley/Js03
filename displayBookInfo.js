const book = {
  titre: "L'Enfant Noir",
  auteur: "Camara Laye",
  annee: 1953
};

function afficherInfosLivre(livre) {
  console.log("Titre : " + livre.titre);
  console.log("Auteur : " + livre.auteur);
  console.log("Année : " + livre.annee);
}

afficherInfosLivre(book);
