const slides = [
	 {
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	 }, 
	 {
		"image":"slide2.jpg",
		"tagLine":"Tirages haute definition grand format <span>pour vos bureaux et events</span>"
	 },
	 {
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	 },
	 {
		"image":"slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	 },
];

let nbr_de_slides = slides.length;
let newDiv = document.createElement('div');

function afficherDots () {
	for(let i = 0; i < nbr_de_slides; i++)
		document.querySelector('.dots').append(newDiv);
		newDiv.classList.add('dot');

}



arrowLeft = document.querySelector('.arrow_left');
arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', function () {
	console.log('left');
})
arrowRight.addEventListener('click', function () {
	console.log('right');
})