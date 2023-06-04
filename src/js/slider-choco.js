var swiper = new Swiper('.my-swiper', {
  preloadImages: false,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 18,

  slidesPerGroup: 1,
  grabCursor: true,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  lazy: {
    loadPrevNext: true,
  },
});
