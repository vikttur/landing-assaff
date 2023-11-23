new Swiper('.comments-slider', {
	loop: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	autoplay: {
		delay: 4500,
		stopOnLastSlide: true,
		disableOnInteraction: false,
	},
	grabCursor: true,
	slideToClickedSlide: true,
	speed: 1500,
	// effect: 'fade',
	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: true,
	// 	limitRotation: true,
	// },
	effect: 'coverFlow',
	coverFlowEffect: {
		rorate: 20,
		stretch: 50,
		slideShadows: true,
	},
	centeredSlides: true,
	autoHeight: true,
	// slidePerView: 'auto',
	// watchOverflow: true,
});
