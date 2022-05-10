const screenWidth = window.screen.width;

if (screenWidth <= 1023) {
  new Swiper(".testimonials-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slideToClickedSlide: true,
    slidesPerView: 1.15,
    spaceBetween: 15,
  });

  new Swiper(".whats-new__swiper", {
    slideToClickedSlide: true,
    slidesPerView: 1.25,
    spaceBetween: 15,
  });

  new Swiper(".blog-content__swiper", {
    slideToClickedSlide: true,
    slidesPerView: 1.25,
    spaceBetween: 15,
  });
} else {
  new Swiper(".testimonials-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slideToClickedSlide: true,
  });

  new Swiper(".whats-new__swiper", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".whats-new__swiper-next",
      prevEl: ".whats-new__swiper-prev",
    },
    spaceBetween: 30,
    freeMode: true,
  });

  new Swiper(".blog-content__swiper", {
    slideToClickedSlide: true,
    slidesPerView: 2.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".blog-content__swiper-next",
      prevEl: ".blog-content__swiper-prev",
    },
  });
}
