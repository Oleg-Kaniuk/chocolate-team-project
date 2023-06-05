var swiper = new Swiper(`.reviews-cards`, {
	spaceBetween: 16,
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	centeredSlides: true,	
	},
	keyboard: {
		enabled:true,
		onlyInViewport:true,
		// pageUpDown:true,
	},
	lazy: {
		loadPrevNext: true,
	 },
	 loop: true, 
	
	breakpoints:{
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 28,
		}
	},

});
