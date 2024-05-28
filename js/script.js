new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
                             
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
	},

	slidesPerView: 3,

	slidesPerGroup: 1,

	spaceBetween: 40,

	breakpoints: {
    320: {
			spaceBetween: 36,
      slidesPerView: 1.39
			
    },	
	},

	breakpoints: {
    320: {
			spaceBetween: 36,
      slidesPerView: 2
			
    },	
	},

	breakpoints: {
			1024: {
				spaceBetween: 36,
				slidesPerView: 3
				
			},	
		}
});



