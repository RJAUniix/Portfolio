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

    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
    new Waypoint({
        element: item,
        offset: '80%',
        handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
        }
    });
    });

// Popup
const popup = document.getElementById("popup");
const form = document.getElementById("formulaire-contact");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const btn = document.querySelector('.confirm-btn');



// Gallery d'image
const voir_gr = document.getElementById('voir-gallerie-gr');
const voir_jd = document.getElementById('voir-gallerie-jd');

const gallerie_gr = document.getElementById('gallerie-gr');
const gallerie_jd = document.getElementById('gallerie-jd');

const para_gr = document.getElementById('para-gr');
const para_jd = document.getElementById('para-jd');


function changeImage(idProjet) {
    if (idProjet==="gr"){
        if (gallerie_gr.classList.contains('hidden')) {
            para_gr.classList.remove('fade-in');
            para_gr.classList.add('fade-out');
            setTimeout(() => {
                para_gr.classList.add('hidden');
                gallerie_gr.classList.remove('hidden');
                gallerie_gr.classList.remove('fade-out');
                gallerie_gr.classList.add('fade-in');
            }, 1000); // Durée de l'animation en millisecondes
        } else {
            gallerie_gr.classList.remove('fade-in');
            gallerie_gr.classList.add('fade-out');
            setTimeout(() => {
                gallerie_gr.classList.add('hidden');
                para_gr.classList.remove('hidden');
                para_gr.classList.remove('fade-out');
                para_gr.classList.add('fade-in');
            }, 1000); // Durée de l'animation en millisecondes
        }
    }
    else if (idProjet==="jd"){
        if (gallerie_jd.classList.contains('hidden')) {
            para_jd.classList.remove('fade-in');
            para_jd.classList.add('fade-out');
            setTimeout(() => {
                para_jd.classList.add('hidden');
                gallerie_jd.classList.remove('hidden');
                gallerie_jd.classList.remove('fade-out');
                gallerie_jd.classList.add('fade-in');
            }, 1000); // Durée de l'animation en millisecondes
        } else {
            gallerie_jd.classList.remove('fade-in');
            gallerie_jd.classList.add('fade-out');
            setTimeout(() => {
                gallerie_jd.classList.add('hidden');
                para_jd.classList.remove('hidden');
                para_jd.classList.remove('fade-out');
                para_jd.classList.add('fade-in');
            }, 1000); // Durée de l'animation en millisecondes
        }
    }
    else {

    }
}

// Ajoutez un écouteur d'événement pour le clic
voir_gr.addEventListener('click', () => changeImage("gr"));
voir_jd.addEventListener('click', () => changeImage("jd"));