// For galerie
//selection de tout les boutons
const btns = document.querySelectorAll('.btn-modale');
//selection des element modale
const modaleEquipement = document.querySelector('.bloc-modale');
//selection
const imgIndex = document.querySelector('.bloc-modale img');


//pour chaque ecoute d'evenement au click on prend l'objet d'événement ici "e"
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {

//ça va donner tout les ressources /img des cibles
        imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
        modaleEquipement.classList.add('active-modale');
    })
})

modaleEquipement.addEventListener('click', () => {
    modaleEquipement.classList.remove('active-modale');
})


//-----------------------------------------------------------------------------
// Anim navbar
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})