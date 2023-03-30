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

