
const oiseaux = [
  {
    nom: "Bécassine de Wilson",
    audio: "../sons/becassine-wilson.m4a",
    image: "../images/Bécassine de Wilson.jpg",
    choix: ["Bécassine de Wilson", "Bernache du Canada", "Bruant à gorge blanche"]
  },
  {
    nom: "Bernache du Canada",
    audio: "../sons/bernache-canada.m4a",
    image: "../images/Bernache du Canada.jpg",
    choix: ["Bernache du Canada", "Corneille d’Amérique", "Dindon sauvage"]
  },
  {
    nom: "Bruant à couronne blanche",
    audio: "../sons/bruant-couronne-blanche.m4a",
    image: "../images/Bruant à couronne blanche.jpg",
    choix: ["Bruant à couronne blanche", "Bruant à gorge blanche", "Roselin familier"]
  },
  {
    nom: "Bruant à gorge blanche",
    audio: "../sons/bruant-gorge-blanche.m4a",
    image: "../images/Bruant à gorge blanche.jpg",
    choix: ["Bruant à gorge blanche", "Moqueur polyglotte", "Tarin des pins"]
  },
  {
    nom: "Buse à épaulettes",
    audio: "../sons/buse-epaulettes.m4a",
    image: "../images/Buse à épaulettes.jpg",
    choix: ["Buse à épaulettes", "Épervier de Cooper", "Grand-duc d’Amérique"]
  },
  {
    nom: "Cardinal rouge femelle",
    audio: "../sons/cardinal-rouge.m4a",
    image: "../images/Cardinal rouge femelle.jpg",
    choix: ["Cardinal rouge femelle", "Chardonneret jaune", "Roselin familier"]
  },
  {
    nom: "Chardonneret jaune",
    audio: "../sons/chardonneret-jaune.m4a",
    image: "../images/Chardonneret jaune.jpg",
    choix: ["Chardonneret jaune", "Tarin des pins", "Mésange à tête noire"]
  },
  {
    nom: "Corneille d’Amérique",
    audio: "../sons/corneille-amerique.m4a",
    image: "../images/Corneille d’Amérique.jpg",
    choix: ["Corneille d’Amérique", "Grand Corbeau", "Geai bleu"]
  },
  {
    nom: "Dindon sauvage",
    audio: "../sons/dindon-sauvage.m4a",
    image: "../images/Dindon sauvage.jpg",
    choix: ["Dindon sauvage", "Bernache du Canada", "Bécassine de Wilson"]
  },
  {
    nom: "Épervier de Cooper",
    audio: "../sons/epervier-cooper.m4a",
    image: "../images/Épervier de Cooper.jpg",
    choix: ["Épervier de Cooper", "Buse à épaulettes", "Grand-duc d’Amérique"]
  },
  {
    nom: "Étourneau sansonnet",
    audio: "../sons/etourneau-sansonnet.m4a",
    image: "../images/Étourneau Sansonnet",
    choix: ["Étourneau Sansonnet", "Moqueur Chat", "Hirondelle bicolore"]
  },
  {
    nom: "Geai bleu",
    audio: "../sons/geai-bleu.m4a",
    image: "../images/Geai bleu.jpg",
    choix: ["Geai bleu", "Corneille d’Amérique", "Grand Corbeau"]
  },
  {
    nom: "Grand Corbeau",
    audio: "../sons/grand-corbeau.m4a",
    image: "../images/Grand Corbeau.jpg",
    choix: ["Grand Corbeau", "Geai bleu", "Corneille d’Amérique"]
  },
  {
    nom: "Grand-duc d’Amérique",
    audio: "../sons/grand-duc-amerique.m4a"
    image: "../images/Grand-duc d’Amérique.jpg",,
    choix: ["Grand-duc d’Amérique", "Épervier de Cooper", "Buse à épaulettes"]
  },
  {
    nom: "Grèbe à bec bigarré",
    audio: "../sons/grebe-bec-bigarre.m4a",
    image: "../images/Grèbe à bec bigarré.jpg",
    choix: ["Grèbe à bec bigarré", "Hirondelle bicolore", "Junco ardoisé"]
  },
  {
    nom: "Hirondelle bicolore",
    audio: "../sons/hirondelle-bicolore.m4a",
    image: "../images/Hirondelle bicolore.jpg",
    choix: ["Hirondelle bicolore", "Hirondelle à front blanc", "Moqueur Chat"]
  },
  {
    nom: "Hirondelle à front blanc",
    audio: "../sons/hirondelle-front-blanc.m4a",
    image: "../images/Hirondelle à front blanc.jpg",
    choix: ["Hirondelle à front blanc", "Hirondelle bicolore", "Moqueur polyglotte"]
  },
  {
    nom: "Junco ardoisé",
    audio: "../sons/junco-ardoise.m4a",
image: "../images/Junco ardoisé.jpg",

    choix: ["Junco ardoisé", "Roselin familier", "Tarin des pins"]
  },
  {
    nom: "Merle d’Amérique",
    audio: "../sons/merle-amerique.m4a",
    image: "../images/Merle d’Amérique.jpg",
    choix: ["Merle d’Amérique", "Moqueur Chat", "Mésange à tête noire"]
  },
  {
    nom: "Mésange à tête noire",
    audio: "../sons/mesange-tete-noire.m4a",
    image: "../images/Mésange à tête noire.jpg",
    choix: ["Mésange à tête noire", "Sitelle à poitrine blanche", "Tarin des pins"]
  },
  {
    nom: "Moqueur Chat",
    audio: "../sons/moqueur-chat.m4a",
    image: "../images/Moqueur Chat.jpg",
    choix: ["Moqueur Chat", "Moqueur polyglotte", "Étourneau Sansonnet"]
  },
  {
    nom: "Moqueur polyglotte",
    audio: "../sons/moqueur-polyglotte.m4a",
    image: "../images/Moqueur polyglotte.jpg",
    choix: ["Moqueur polyglotte", "Moqueur Chat", "Roselin familier"]
  },
  {
    nom: "Pic chevelu",
    audio: "../sons/pic-chevelu.m4a",
    image: "../images/Pic chevelu.jpg",
    choix: ["Pic chevelu", "Pic mineur", "Grand-duc d’Amérique"]
  },
  {
    nom: "Pic mineur",
    audio: "../sons/pic-mineur.m4a",
    image: "../images/Pic mineur.jpg",
    choix: ["Pic mineur", "Pic chevelu", "Sitelle à poitrine rousse"]
  },
  {
    nom: "Roselin familier",
    audio: "../sons/roselin-familier.m4a",
    image: "../images/Roselin familier.jpg",
    choix: ["Roselin familier", "Tarin des pins", "Chardonneret jaune"]
  },
  {
    nom: "Sitelle à poitrine blanche",
    audio: "../sons/sittelle-poitrine-blanche.m4a",
    image: "../images/Sitelle à poitrine blanche.jpg",
    choix: ["Sitelle à poitrine blanche", "Sitelle à poitrine rousse", "Mésange à tête noire"]
  },
  {
    nom: "Sitelle à poitrine rousse",
    audio: "../sons/sittelle-poitrine-rousse.m4a",
    image: "../images/Sitelle à poitrine rousse.jpg",
    choix: ["Sitelle à poitrine rousse", "Sitelle à poitrine blanche", "Mésange à tête noire"]
  },
  {
    nom: "Tarin des pins",
    audio: "../sons/tarin-pins.m4a",
    image: "../images/Tarin des pins.jpg",
    choix: ["Tarin des pins", "Chardonneret jaune", "Roselin familier"]
  },
  {
    nom: "Tourterelle triste",
    audio: "../sons/tourterelle-triste.m4a",
    image: "../images/Tourterelle triste.jpg",
    choix: ["Tourterelle triste", "Tyran tritri", "Moqueur polyglotte"]
  },
  {
    nom: "Tyran tritri",
    audio: "../sons/tyran-tritri.m4a",
    image: "../images/Tyran tritri.jpg",
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

    // On passe à la question suivante seulement si c'est correct
    setTimeout(() => {
      feedback.textContent = "";
      nouvelleQuestion();
    }, 1200);

  } else {
    feedback.textContent = "Ce n’était pas celui-là. Essaie encore.";
    // Rien d'autre : on reste sur la même question
  }
}
// Bouton de départ
document.getElementById("start").onclick = nouvelleQuestion;

// Bouton pour réécouter le chant
document.getElementById("replay").onclick = () => {
  const audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();
};