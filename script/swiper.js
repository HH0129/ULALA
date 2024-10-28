// 배너 스와이퍼
var MainSwiper = new Swiper(".mainSwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var SubSwiper = new Swiper(".subSwiper",{

  });
// 첫번째 컨테이너 스와이퍼
