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




