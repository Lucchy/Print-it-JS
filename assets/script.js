const slides = [
	 {
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	 }, 
	 {
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute definition grand format <span>pour vos bureaux et events</span>"
	 },
	 {
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	 },
	 {
		"image":"./assets/images/slideshow/slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	 },
];

//INITIALISATION DES SLIDES
img = document.querySelector('.banner-img');
img.src = slides[0].image;

let txt = document.querySelector('#banner p');
txt.innerHTML = slides[0].tagLine;

console.log(slides[2].tagLine);

// DECLARATION DES VARIABLES
let nbr_de_slides = slides.length;
dots = document.querySelector('.dots');

arrowLeft = document.querySelector('.arrow_left');
arrowRight = document.querySelector('.arrow_right');

slide_active = 0;

//CREATION DU PREMIER POINT DOT SELECTED 	
firstDot = document.createElement('div');
firstDot.classList.add('dot');
firstDot.classList.add('dot_selected');
dots.appendChild(firstDot);

//GENERATION DES POINTS EN FONCTION DU NOMBRE DE SLIDES
for(let i = 0; i < nbr_de_slides - 1; i++) {
	let tab = [];
	tab[i] = document.createElement('div');
	tab[i].classList.add('dot');
	document.querySelector('.dots').append(tab[i]);
}
//TRANSFORMATION DE LA CLASSE DOTS EN TABLEAU
tabDots = Array.from(dots.children);
console.log(tabDots);

//FONCTION QUI PERMET D'ENLEVER LES CLASSES ACTIVES
function removeActive() {
	for (let i = 0; i < nbr_de_slides; i++) {
		tabDots[i].classList.remove('dot_selected');
	}
}

// EVENT LISTENER SUR LES ARROWS GAUCHE ET DROITE

arrowLeft.addEventListener('click', function () {
	console.log('left');
	slide_active--;

	if(slide_active < 0){
		slide_active = nbr_de_slides - 1;
	}
	removeActive();
	tabDots[slide_active].classList.add('dot_selected');
	img.src = slides[slide_active].image;
	txt.innerHTML = slides[slide_active].tagLine;
})


arrowRight.addEventListener('click', function () {
	console.log('right');
	slide_active++;

	if(slide_active >= nbr_de_slides){
		slide_active = 0;
	}
	removeActive();
	tabDots[slide_active].classList.add('dot_selected');
	img.src = slides[slide_active].image;
	txt.innerHTML = slides[slide_active].tagLine;
})

