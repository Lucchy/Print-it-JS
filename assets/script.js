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

let nbr_de_slides = 4;

dots = document.querySelector('.dots')


firstDot = document.createElement('div');
firstDot.classList.add('dot')
firstDot.classList.add('dot_selected')
dots.appendChild(firstDot)

for(let i = 0; i < nbr_de_slides - 1; i++) {
	let tab = [];
	tab[i] = document.createElement('div');
	tab[i].classList.add('dot');
	document.querySelector('.dots').append(tab[i]);
}
tabDots = Array.from(dots.children);
console.log(tabDots);

function removeactive () {
	for (let i = 0; i < nbr_de_slides; i++) {
		tabDots[i].classList.remove('dot_selected');
	}
}
arrowLeft = document.querySelector('.arrow_left');
arrowRight = document.querySelector('.arrow_right');

slide_active = 0;

arrowLeft.addEventListener('click', function () {
	console.log('left');
	
	
})


arrowRight.addEventListener('click', function () {
	console.log('right');
	slide_active++;
	removeactive();
	tabDots[slide_active].classList('dot_selected');
})
