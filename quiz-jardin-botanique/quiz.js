// Liste des oiseaux — nous allons la remplir ensemble
const oiseaux = [
  // Exemple temporaire
  {
    nom: "Exemple",
    audio: "sons/exemple.m4a",
    choix: ["Exemple", "Autre oiseau", "Encore un autre"]
  }
];

// Mélange aléatoire (Fisher–Yates)
function melanger(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let score = 0;

// Nouvelle question
function nouvelleQuestion() {
  const oiseau = oiseaux[Math.floor(Math.random() * oiseaux.length)];

  // jouer le son
  const audio = document.getElementById("audio");
  audio.src = oiseau.audio;
  audio.play();

  // mélanger les choix
  const choixMelanges = melanger([...oiseau.choix]);

  // afficher les boutons
  const conteneur = document.getElementById("choix");
  conteneur.innerHTML = "";

  choixMelanges.forEach(choix => {
    const bouton = document.createElement("button");
    bouton.textContent = choix;
    bouton.onclick = () => verifierReponse(choix, oiseau.nom);
    conteneur.appendChild(bouton);
  });
}

// Vérification
function verifierReponse(choix, bonneReponse) {
  const feedback = document.getElementById("feedback");

  if (choix === bonneReponse) {
    score++;
    feedback.textContent = "Bravo !";
  } else {
    feedback.textContent = "Ce n’était pas celui-là.";
  }

  setTimeout(() => {
    feedback.textContent = "";
    nouvelleQuestion();
  }, 1500);
}

// Bouton de départ
document.getElementById("start").onclick = nouvelleQuestion;