let phonelink = document.querySelector('.last-header-link');
let popup = document.querySelector('.popup-container');
let closeButton = document.querySelector('.close');

console.log(popup);
console.log(phonelink);

phonelink.addEventListener('click', function() {
	popup.classList.add('open');
});

popup.addEventListener('click', function(event) {
	if( event.target.classList.contains('popup-container') || event.target.classList.contains('close')) {
		popup.classList.remove('open');
	}
});


let goodsLinks = document.querySelectorAll('.header-goods-link');
let goodsPopup = document.querySelectorAll('.goods-popup-tepl');
let closePopup = document.querySelectorAll('.close-1');

goodsLinks.forEach((item, index) => {
	item.addEventListener('click', () => {
		goodsPopup.forEach(item => item.classList.remove('open'));
		goodsPopup[index].classList.add('open');
	})
});

closePopup.forEach(item => {
		item.addEventListener('click', () => {
		goodsPopup.forEach(item => item.classList.remove('open'));
	});
});

new Swiper('.swiper-container', {
	pagination: {
		el: ".swiper-pagination",

		clickable: true,

	},

	loop: true,

	speed: 600,

	fadeEffect: {
    	crossFade: true,
    },
});
