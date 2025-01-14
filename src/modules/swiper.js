swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    780: {
      toggle: false,
      loop: false,
      spaceBetween: 'auto',
      slidesPerView: 'auto',
      centeredSlides: false
    }
  }
});