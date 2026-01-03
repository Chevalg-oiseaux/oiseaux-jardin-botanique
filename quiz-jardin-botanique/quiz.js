const oiseaux = [
  {
    nom: "Bécassine de Wilson",
    audio: "../sons/becassine-wilson.m4a",
    choix: ["Bécassine de Wilson", "Bernache du Canada", "Bruant à gorge blanche"]
  },
  {
    nom: "Bernache du Canada",
    audio: "../sons/bernache-canada.m4a",
    choix: ["Bernache du Canada", "Corneille d’Amérique", "Dindon sauvage"]
  },
  {
    nom: "Bruant à couronne blanche",
    audio: "../sons/bruant-couronne-blanche.m4a",
    choix: ["Bruant à couronne blanche", "Bruant à gorge blanche", "Roselin familier"]
  },
  {
    nom: "Bruant à gorge blanche",
    audio: "../sons/bruant-gorge-blanche.m4a",
    choix: ["Bruant à gorge blanche", "Moqueur polyglotte", "Tarin des pins"]
  },
  {
    nom: "Buse à épaulettes",
    audio: "../sons/buse-epaulettes.m4a",
    choix: ["Buse à épaulettes", "Épervier de Cooper", "Grand-duc d’Amérique"]
  },
  {
    nom: "Cardinal rouge femelle",
    audio: "../sons/cardinal-rouge.m4a",
    choix: ["Cardinal rouge femelle", "Chardonneret jaune", "Roselin familier"]
  },
  {
    nom: "Chardonneret jaune",
    audio: "../sons/chardonneret-jaune.m4a",
    choix: ["Chardonneret jaune", "Tarin des pins", "Mésange à tête noire"]
  },
  {
    nom: "Corneille d’Amérique",
    audio: "../sons/corneille-amerique.m4a",
    choix: ["Corneille d’Amérique", "Grand Corbeau", "Geai bleu"]
  },
  {
    nom: "Dindon sauvage",
    audio: "../sons/dindon-sauvage.m4a",
    choix: ["Dindon sauvage", "Bernache du Canada", "Bécassine de Wilson"]
  },
  {
    nom: "Épervier de Cooper",
    audio: "../sons/epervier-cooper.m4a",
    choix: ["Épervier de Cooper", "Buse à épaulettes", "Grand-duc d’Amérique"]
  },
  {
    nom: "Étourneau Sansonnet",
    audio: "../sons/etourneau-sansonnet.m4a",
    choix: ["Étourneau Sansonnet", "Moqueur Chat", "Hirondelle bicolore"]
  },
  {
    nom: "Geai bleu",
    audio: "../sons/geai-bleu.m4a",
    choix: ["Geai bleu", "Corneille d’Amérique", "Grand Corbeau"]
  },
  {
    nom: "Grand Corbeau",
    audio: "../sons/grand-corbeau.m4a",
    choix: ["Grand Corbeau", "Geai bleu", "Corneille d’Amérique"]
  },
  {
    nom: "Grand-duc d’Amérique",
    audio: "../sons/grand-duc-amerique.m4a",
    choix: ["Grand-duc d’Amérique", "Épervier de Cooper", "Buse à épaulettes"]
  },
  {
    nom: "Grèbe à bec bigarré",
    audio: "../sons/grebe-bec-bigarre.m4a",
    choix: ["Grèbe à bec bigarré", "Hirondelle bicolore", "Junco ardoisé"]
  },
  {
    nom: "Hirondelle bicolore",
    audio: "../sons/hirondelle-bicolore.m4a",
    choix: ["Hirondelle bicolore", "Hirondelle à front blanc", "Moqueur Chat"]
  },
  {
    nom: "Hirondelle à front blanc",
    audio: "../sons/hirondelle-front-blanc.m4a",
    choix: ["Hirondelle à front blanc", "Hirondelle bicolore", "Moqueur polyglotte"]
  },
  {
    nom: "Junco ardoisé",
    audio: "../sons/junco-ardoise.m4a",
    choix: ["Junco ardoisé", "Roselin familier", "Tarin des pins"]
  },
  {
    nom: "Merle d’Amérique",
    audio: "../sons/merle-amerique.m4a",
    choix: ["Merle d’Amérique", "Moqueur Chat", "Mésange à tête noire"]
  },
  {
    nom: "Mésange à tête noire",
    audio: "../sons/mesange-tete-noire.m4a",
    choix: ["Mésange à tête noire", "Sitelle à poitrine blanche", "Tarin des pins"]
  },
  {
    nom: "Moqueur Chat",
    audio: "../sons/moqueur-chat.m4a",
    choix: ["Moqueur Chat", "Moqueur polyglotte", "Étourneau Sansonnet"]
  },
  {
    nom: "Moqueur polyglotte",
    audio: "../sons/moqueur-polyglotte.m4a",
    choix: ["Moqueur polyglotte", "Moqueur Chat", "Roselin familier"]
  },
  {
    nom: "Pic chevelu",
    audio: "../sons/pic-chevelu.m4a",
    choix: ["Pic chevelu", "Pic mineur", "Grand-duc d’Amérique"]
  },
  {
    nom: "Pic mineur",
    audio: "../sons/pic-mineur.m4a",
    choix: ["Pic mineur", "Pic chevelu", "Sitelle à poitrine rousse"]
  },
  {
    nom: "Roselin familier",
    audio: "../sons/roselin-familier.m4a",
    choix: ["Roselin familier", "Tarin des pins", "Chardonneret jaune"]
  },
  {
    nom: "Sitelle à poitrine blanche",
    audio: "../sons/sittelle-poitrine-blanche.m4a",
    choix: ["Sitelle à poitrine blanche", "Sitelle à poitrine rousse", "Mésange à tête noire"]
  },
  {
    nom: "Sitelle à poitrine rousse",
    audio: "../sons/sittelle-poitrine-rousse.m4a",
    choix: ["Sitelle à poitrine rousse", "Sitelle à poitrine blanche", "Mésange à tête noire"]
  },
  {
    nom: "Tarin des pins",
    audio: "../sons/tarin-pins.m4a",
    choix: ["Tarin des pins", "Chardonneret jaune", "Roselin familier"]
  },
  {
    nom: "Tourterelle triste",
    audio: "../sons/tourterelle-triste.m4a",
    choix: ["Tourterelle triste", "Tyran tritri", "Moqueur polyglotte"]
  },
  {
    nom: "Tyran tritri",
    audio: "../sons/tyran-tritri.m4a",
    choix: ["Tyran tritri", "Tourterelle triste", "Épervier de Cooper"]
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