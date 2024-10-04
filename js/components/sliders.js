export function createSlider(swiperClass, prevEl, nextEl) {
  return new Swiper(swiperClass, {
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    navigation: {
      prevEl: prevEl,
      nextEl: nextEl,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
// Slider
export function initCardSliders() {
  // Create Sliders HTML
  function createSlidersHTML() {
    const cardsSliderWrapper = document.querySelectorAll(".cards__info-slider");

    cardsSliderWrapper.forEach((item, index) => {
      let number = index + 1;

      let sliderHTML = `
          <div class="swiper mySwiper${number}">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
              <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
              <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="swiper-btn swiper-btn--prev mySwiper${number}prev"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
          <div class="swiper-btn swiper-btn--next mySwiper${number}next"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
        `;

      item.insertAdjacentHTML("afterbegin", sliderHTML);
    });

    initializeSliders();
  }
  // Initialize all sliders
  function initializeSliders() {
    const sliders = document.querySelectorAll(".swiper");

    sliders.forEach((slider, index) => {
      let number = index + 1;

      createSlider(`.mySwiper${number}`, `.mySwiper${number}prev`, `.mySwiper${number}next`);
    });
  }
  // Show first 4 cards
  createSlidersHTML();
}

export const cardsMediaSwiper = new Swiper(".mySwiperCards", {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

export const reviewsSwiper = new Swiper(".mySwiperReviews", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
  navigation: {
    prevEl: ".mySwiperReviewsPrev",
    nextEl: ".mySwiperReviewsNext",
  },
});

export const creditsMediaSwiper = new Swiper(".mySwiperBanks", {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
