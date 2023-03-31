// Sélectionne toutes les images des projets
const projectImages = document.querySelectorAll('.project-image');

// Pour chaque image de projet, ajoute un gestionnaire d'événements au clic
projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    // Sélectionne l'élément contenant les détails du projet
    const projectDetails = image.nextElementSibling;
    
    // Ajoute la classe "show" à l'élément contenant les détails du projet
    projectDetails.classList.add('show');
  });
});

/* Animation */
let textElement = document.getElementById('dynamic-text');

let baseText = "Je suis étudiant en informatique passionné par ";
let steps = ["le réseau", "le système", "la cybersécurité"];

let currentStep = 0;
let currentChar = 0;
let erasing = false;
let initialWrite = true;

function updateText() {
  // Écrire la phrase complète au début
  if (initialWrite) {
    if (currentChar < baseText.length + steps[currentStep].length) {
      // Écrire le texte de base
      if (currentChar < baseText.length) {
        textElement.textContent += baseText[currentChar];
      }
      // Écrire la partie finale de la phrase
      else {
        textElement.textContent += steps[currentStep][currentChar - baseText.length];
      }
      currentChar++;
      setTimeout(updateText, 50);
    } else {
      // Passer à l'animation d'écriture et d'effacement
      initialWrite = false;
      erasing = true;
      setTimeout(updateText, 1000);
    }
  }
  // Ajouter des caractères à la fin
  else if (!erasing) {
    if (currentChar < steps[currentStep].length) {
      textElement.textContent = baseText + steps[currentStep].substring(0, currentChar + 1);
      currentChar++;
      setTimeout(updateText, 50);
    } else {
      // Passer à l'effacement
      erasing = true;
      setTimeout(updateText, 1000);
    }
  }
  // Effacer des caractères à la fin
  else {
    if (currentChar >= 0) {
      textElement.textContent = baseText + steps[currentStep].substring(0, currentChar);
      currentChar--;
      setTimeout(updateText, 50);
    } else {
      // Passer à l'ajout de caractères
      erasing = false;
      currentStep = (currentStep + 1) % steps.length;
      setTimeout(updateText, 500);
    }
  }
}

// Lancer la fonction d'animation
updateText();


//Regler le défillement.
// Sélectionnez tous les éléments de la barre de navigation
const navLinks = document.querySelectorAll('nav a');

// Obtenez la hauteur de la barre de navigation
const navHeight = document.querySelector('header').offsetHeight;

// Ajoutez un gestionnaire d'événements 'click' à chaque lien de la barre de navigation
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Empêchez le comportement par défaut du navigateur
    event.preventDefault();
    
    // Obtenez l'identifiant de la section cible
    const targetId = link.getAttribute('href');
    
    // Sélectionnez la section cible
    const targetSection = document.querySelector(targetId);
    
    // Calculez la position de défilement souhaitée en tenant compte de la hauteur de la barre de navigation
    const scrollToPosition = targetSection.offsetTop - navHeight;
    
    // Faites défiler la page vers la position souhaitée
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  });
});


/* Barre de progression des challenges root-me*/
// Sélectionnez tous les éléments de challenge
const challenges = document.querySelectorAll('.challenge');

challenges.forEach((challenge) => {
  // Récupérez la progression à partir de l'attribut data-progress
  const progressPercentage = challenge.getAttribute('data-progress');
  
  // Sélectionnez la barre de progression pour ce challenge
  const progressBar = challenge.querySelector('.progress-bar');
  
  // Définissez la largeur de la barre de progression en fonction de la progression
  progressBar.style.width = progressPercentage + '%';
});

