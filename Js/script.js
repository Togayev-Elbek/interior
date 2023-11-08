var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".one",
    prevEl: ".on-e",
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
      760: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
      630: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
      480: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  }
});
var swiper = new Swiper(".mySwiper-one", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-two",
    prevEl: ".prev-tw-o",
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
      760: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
      630: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
      480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,  
    }
  }
});