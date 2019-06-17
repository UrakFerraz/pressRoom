var sliderBullet1 = document.querySelector('.heroSlideBullet1Clicked');
var sliderBullet2 = document.querySelector('.heroSlideBullet2Clicked');
var sliderBullet3 = document.querySelector('.heroSlideBullet3Clicked');
var clickSlideBullet1 = document.querySelector('.heroSlideBullet1');
var clickSlideBullet2 = document.querySelector('.heroSlideBullet2');
var clickSlideBullet3 = document.querySelector('.heroSlideBullet3');

var slider1 = document.querySelector('.slider1Slide1');
var slider2 = document.querySelector('.slider1Slide2');
var slider3 = document.querySelector('.slider1Slide3');

var leftArrow = document.querySelector('#slidesArrowLeft');
var rightArrow = document.querySelector('#slidesArrowRight');

sliderBullet1.style.display = 'block';
sliderBullet2.style.display = 'none';
sliderBullet3.style.display = 'none';

var Slide1Checkpoint = true;
var Slide2Checkpoint = false;
var Slide3Checkpoint = false;

var cont = 1;

var slideTimer = 5; //definir tempo em segundos para cada slide



// ações clique nos bullets
function toSlide1() {
	slider1.scrollIntoView(false);
	sliderBullet1.style.display = 'block';
	sliderBullet2.style.display = 'none';
	sliderBullet3.style.display = 'none';
	cont = 1;
	var Slide1Checkpoint = true;
	var Slide2Checkpoint = false;
	var Slide3Checkpoint = false;
}

function toSlide2() {
	slider2.scrollIntoView(false);
	sliderBullet1.style.display = 'none';
	sliderBullet2.style.display = 'block';
	sliderBullet3.style.display = 'none';
	cont = 2;
	var Slide1Checkpoint = false;
	var Slide2Checkpoint = true;
	var Slide3Checkpoint = false;
}

function toSlide3() {
	slider3.scrollIntoView(false);
	sliderBullet1.style.display = 'none';
	sliderBullet2.style.display = 'none';
	sliderBullet3.style.display = 'block';
	cont = 3;
	var Slide1Checkpoint = false;
	var Slide2Checkpoint = false;
	var Slide3Checkpoint = true;
}


clickSlideBullet1.addEventListener('click', function() {
	toSlide1();
});

clickSlideBullet2.addEventListener('click', function() {
	toSlide2();
});

clickSlideBullet3.addEventListener('click', function() {
	toSlide3();
});


// ações cliques nas setas
rightArrow.addEventListener('click', function() {
	if (cont == 1) {
		slider2.scrollIntoView(false);
		sliderBullet1.style.display = 'none';
		sliderBullet2.style.display = 'block';
		sliderBullet3.style.display = 'none';
		cont = 2;
		var Slide1Checkpoint = false;
		var Slide2Checkpoint = true;
		var Slide3Checkpoint = false;
	} else if (cont == 2) {
		slider3.scrollIntoView(false);
		sliderBullet1.style.display = 'none';
		sliderBullet2.style.display = 'none';
		sliderBullet3.style.display = 'block';
		cont = 3;
		var Slide1Checkpoint = false;
		var Slide2Checkpoint = false;
		var Slide3Checkpoint = true;
	} else if (cont == 3) {
		slider1.scrollIntoView(false);
		sliderBullet1.style.display = 'block';
		sliderBullet2.style.display = 'none';
		sliderBullet3.style.display = 'none';
		cont = 1;
		var Slide1Checkpoint = true;
		var Slide2Checkpoint = false;
		var Slide3Checkpoint = false;
	}
});


leftArrow.addEventListener('click', function() {
	if (cont == 3) {
		slider2.scrollIntoView(false);
		sliderBullet1.style.display = 'none';
		sliderBullet2.style.display = 'block';
		sliderBullet3.style.display = 'none';
		cont = 2;
		var Slide1Checkpoint = false;
		var Slide2Checkpoint = true;
		var Slide3Checkpoint = false;
	} else if (cont == 2) {
		slider1.scrollIntoView(false);
		sliderBullet1.style.display = 'block';
		sliderBullet2.style.display = 'none';
		sliderBullet3.style.display = 'none';
		cont = 1;
		var Slide1Checkpoint = true;
		var Slide2Checkpoint = false;
		var Slide3Checkpoint = false;
	} else if (cont == 1) {
		slider3.scrollIntoView(false);
		sliderBullet1.style.display = 'none';
		sliderBullet2.style.display = 'none';
		sliderBullet3.style.display = 'block';
		cont = 3;
		var Slide1Checkpoint = false;
		var Slide2Checkpoint = false;
		var Slide3Checkpoint = true;
	}
});


// rolagem automática
function slideAutomatic() {
	setTimeout(toSlide2, (slideTimer * 1000));
	setTimeout(toSlide3, (slideTimer * 1000)*2);
	setTimeout(toSlide1, (slideTimer * 1000)*3);
}

window.onload = slideAutomatic();


setTimeout(slideAutomatic, (slideTimer * 1000)*4);
setTimeout(slideAutomatic, (slideTimer * 1000)*8);
setTimeout(slideAutomatic, (slideTimer * 1000)*16);
setTimeout(slideAutomatic, (slideTimer * 1000)*32);
setTimeout(slideAutomatic, (slideTimer * 1000)*64);
setTimeout(slideAutomatic, (slideTimer * 1000)*128);




