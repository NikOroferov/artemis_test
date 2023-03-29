const screenWidth = window.screen.width;

new Swiper(".case-swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".blog-pagination",
    clickable: true,
    renderBullet: function (idx, className) {
      return '<span class=" ' + className + ' ">' + (idx + 1) + "</span>";
    },
  },
});

if (screenWidth < 1024) {
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

  new Swiper(".blog-swiper", {
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

  new Swiper(".blog-swiper", {
    slideToClickedSlide: true,
    slidesPerView: 2.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".blog-swiper-next",
      prevEl: ".blog-swiper-prev",
    },
  });
}
