// Sélectionnez tous les liens ancrés de votre site
const links = document.querySelectorAll('a[href^="#"]');

// Ajoutez un gestionnaire d'événements de clic à chaque lien ancré
links.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Fonction pour effectuer le défilement en douceur
function smoothScroll(event) {
event.preventDefault(); 

const targetId = this.getAttribute('href'); // Récupère l'ID de la cible du lien
const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

if (targetElement) {
    const targetPosition = targetElement.offsetTop; // Obtient la position de l'élément cible

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
    });
}
}

// Popup
const popup = document.getElementById("popup");
const form = document.getElementById("formulaire-contact");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const btn = document.querySelector('.confirm-btn');

btn.addEventListener('click', afficherPopup);
function afficherPopup(){  
    if(nom.value !== '' && prenom.value !== '') {
        popup.classList.add("popup-ouvert");
        nom.value = "";
        prenom.value = "";
    }
    else{
        alert('Remplissez le formulaire correctement svp!')
    }

    
    const t = document.querySelector('.popup-ouvert');
    if(t !== null){
        popup.addEventListener('click', () => {
            popup.classList.remove("popup-ouvert");
        });
    }
}

