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

// Gallery d'image
// const displayedImage = document.querySelector('.displayed-img');
// const thumbBar = document.querySelector('.thumb-bar');

// const btn = document.querySelector('button');
// const display = document.querySelector('.displayed-img');
// const overlay = document.querySelector('.overlay');

// /* Declaring the array of image filenames */

// const tab_img = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// const tab_object = [
//     {nom:'pic1.jpg', description:'Photo d\'un oeil'},
//     {nom:'pic2.jpg', description:'Photo bizarre'},
//     {nom:'pic3.jpg', description:'Photo de fleurs'},
//     {nom:'pic4.jpg', description:'Photo des Egyptiens'},
//     {nom:'pic5.jpg', description:'Photo d\'un papillon'},
// ];

// /* Declaring the alternative text for each image file */
// for (const photos of tab_object){
//     const image = document.createElement('img');
    
//     image.setAttribute('src', `img/${photos.nom}`);
//     image.setAttribute('alt', `${photos.description}`);

//     thumbBar.appendChild(image);
// }

// thumbBar.addEventListener("click", (event) => {
//     const src = event.target.getAttribute('src');
//     const alt = event.target.getAttribute('alt');
    
//     display.setAttribute('src',src);
//     display.setAttribute('alt',alt);
// });

// /* Wiring up the Darken/Lighten button */

// btn.addEventListener("click", () => {
//     if(btn.textContent === 'Dark'){
//         btn.textContent = 'Light';
//         display.setAttribute('class','dark')
//         overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
//     }
//     else{
//         btn.textContent = 'Dark';
//         display.removeAttribute('class','dark')
//         overlay.style.backgroundColor = 'rgb(0,0,0,0)';
//     }
// });


// Gallery d'image

function changeImage(buttonId) {
    const imageElement = document.getElementById('displayed-img');
    
    // if (buttonId == 'Wps') {
    //     imageElement.src = '../img/Portfolio/jadechecking.png';
    // }
    // else {
    //     imageElement.src = '../img/Portfolio/gr.png';
    // }
    console.log(buttonId);
}