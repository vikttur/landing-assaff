new Swiper('.gallery-slider', {
	loop: true,
	// navigation: {
	// 	prevEl: 'swiper-button-prev',
	// 	nextEl: 'swiper-button-next',
	// },
	  pagination: {
    el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
  },
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	// },
	// hashNavigation: {
	// 	watchState: true,
	// },
	autoplay: {
		delay: 2500,
		stopOnLastSlide: true,
		disableOnInteraction: false,
	},
	// preloadImages: false,
	// lazy: {
	// 	loadOnTransitionStart: false,
	// 	loadPrevNext:false,
	// },
	// watchSlidesProgress: true,
	// watchSlidesVisability: true,

	// keyboard: {
	// 	enabled: true,
	// 	onlyInVievport: true,
	// 	pageUpDown: true,
	// },
	grabCursor: true,
	slideToClickedSlide: true,
	speed: 1500,
	// effect: 'fade',
	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: true,
	// 	limitRotation: true,
	// },
	effect: 'cube',
	cubeEffect: {
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale:0.9,
	},
	// zoom: {
	// 	maxRatio:5,
	// 	minRatio: 1,
	// },
	// effect: 'coverFlow',
	// coverFlowEffect: {
	// 	rorate: 20,
	// 	stretch: 50,
	// 	slideShadows: true,
	// },
	// slidePerColumn: 2,
	// centeredSlides: true,
	// autoHeight: true,
	// slidePerView: 'auto',
	// watchOverflow: true,

	// mousewheel: {
	// 	sensitiviti: 1,
	// 	eventsTarget: ".image-slider",
	// },
	// breakpoints: {
	// 	320: {
	// 		slidePerView: 1,
	// 	},
	// 	480: {
	// 		slidePerView: 2,
	// 	},
	// 	768: {
	// 		slidePerView: 3,
	// 	},
	// },
});
