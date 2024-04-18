function Pourquoi() {
    // Afficher le texte et ajouter la classe pour centrer le texte par rapport au bouton "Pourquoi"
    document.getElementById("resultat").innerText = "Les difficultés dans les domaines de la communication et des interactions sociales sont l’un des premiers signes cliniques du TSA présent dans le DSM V. Un enfant autiste peut être dans l’incapacité de maintenir une conversation en raison d’une réduction d’intérêts, d’émotions, d’affects et de réponses. L’enfant peut présenter des difficultés dans la compréhension et l’utilisation de la communication verbale ou non verbale.";
    document.getElementById("resultat").classList.add("resultat-pourquoi");
}

function Solution() {
    // Afficher le texte
    document.getElementById("resultat2").innerText = "Dans le cas d’un travail de groupe, l’enseignant peut proposer une tâche bien spécifique à l’enfant afin de cibler son intérêt. Afin de l’investir, le choix d’une tâche en lien avec ses préférences, ses intérêts est essentiel. L’enseignant peut également encourager ses camarades à interagir avec lui.";
    document.getElementById("resultat2").classList.add("resultat-solution");
}

function Savoir() {
    // Afficher le texte
    document.getElementById("resultat3").innerText = "A partir de 3 ans, les enfants sont capables d’interagir avec leurs pairs, ils s’engagent dans le jeu et peuvent coopérer.";
    document.getElementById("resultat3").classList.add("resultat-savoir");
}