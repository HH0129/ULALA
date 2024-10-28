// 배너 스와이퍼
var MainSwiper = new Swiper(".mainSwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSwiper .swiper-button-next",
      prevEl: ".mainSwiper .swiper-button-prev",
    },
  });

// 첫번째 컨테이너 스와이퍼
var SubSwiper = new Swiper(".subSwiper", {
  slidesPerView: 1.3, //모바일
  spaceBetween: 20,
  navigation: {
      nextEl: ".subSwiper .swiper-button-next",
      prevEl: ".subSwiper .swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 2.3, //태블릿
          spaceBetween: 20,
      },
      1280: {
          slidesPerView: 6.1, //웹
          slidesPerGroup:6.3,
          spaceBetween: 20,
      },  
  },
});