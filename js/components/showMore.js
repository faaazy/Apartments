import { createSlider, cardsMediaSwiper, creditsMediaSwiper } from "./sliders.js";

// export function makeMoreCards() {}

let currentSliderCount = 4;
function showMoreCards() {
  // Show 2 new cards
  const cardsWrapper = document.querySelector(".cards__row");

  for (let i = 0; i < 2; i++) {
    if (currentSliderCount >= 8) return;
    currentSliderCount++;

    const cardHTML = `
            <div class="card">
              <div class="card__row">
                <div class="cards__info">
                  <div class="cards__info-slider">
                    <!-- Swiper -->
                    <div class="swiper mySwiper${currentSliderCount}">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
                        <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
                        <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
                      </div>
                      <div class="swiper-pagination"></div>
                    </div>
                    <div class="swiper-btn swiper-btn--prev mySwiper${currentSliderCount}prev"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
                    <div class="swiper-btn swiper-btn--next mySwiper${currentSliderCount}next"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
                    <!-- Swiper -->
                  </div>
      
                  <div class="cards__info-badges">
                    <div class="cards__info-badges__row">
                      <!-- info-badge -->
                      <div class="cards__info-badges__badge">
                        <img src="./img/cards/products.svg" alt="" />
                        <span class="cards__info-badges__badge-title">Продукты 6</span>
                      </div>
                      <!-- info-badge -->
                      <div class="cards__info-badges__badge">
                        <img src="./img/cards/education.svg" alt="" />
                        <span class="cards__info-badges__badge-title">Образование 6</span>
                      </div>
                      <!-- info-badge -->
                      <div class="cards__info-badges__badge">
                        <img src="./img/cards/medicine.svg" alt="" />
                        <span class="cards__info-badges__badge-title">Медицина 6</span>
                      </div>
                      <!-- info-badge -->
                      <div class="cards__info-badges__badge">
                        <img src="./img/cards/sport.svg" alt="" />
                        <span class="cards__info-badges__badge-title">Спорт 6</span>
                      </div>
                      <!-- info-badge -->
                      <div class="cards__info-badges__badge">
                        <img src="./img/cards/entertainment.svg" alt="" />
                        <span class="cards__info-badges__badge-title">Развлечения 6</span>
                      </div>
                      <!-- info-badge -->
                      <div class="cards__info-badges__badge">
                        <img src="./img/cards/parks.svg" alt="" />
                        <span class="cards__info-badges__badge-title">Парки 6</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards__prices">
                  <div class="card__prices-heading">
                    <div class="card__prices-heading__row">
                      <div class="card__prices-heading__left">
                        <h3 class="card__prices-heading__left-title title-3">ЖК Чаркова 72</h3>
                        <a href="#!" class="card__prices-heading__left-link">100 квартир от застройщика «Астон»</a>
                      </div>
                      <div class="card__prices-heading__right">
                        <h3 class="card__prices-heading__right-title title-3">от 4 377 600 р</h3>
                        <a href="#!" class="card__prices-heading__right-link">В ипотеку от 13 760 р / мес</a>
                        <div class="card__prices-heading__right-quarter">3 квартал 2024 — <br />3 квартал 2025</div>
                      </div>
                    </div>
                  </div>
                  <div class="card__prices-rooms">
                    <div class="card__prices-rooms__row">
                      <!-- rooms__item -->
                      <div class="card__prices-rooms__item">
                        <span class="card__prices-rooms__item-accent">Студии</span>
                        <span class="card__prices-rooms__item-price">от 4,4 млн р</span>
                      </div>
                      <!-- rooms__item -->
                      <div class="card__prices-rooms__item">
                        <span class="card__prices-rooms__item-accent">3-комнатные</span>
                        <span class="card__prices-rooms__item-price">от 4,4 млн р</span>
                      </div>
                      <!-- rooms__item -->
                      <div class="card__prices-rooms__item">
                        <span class="card__prices-rooms__item-accent">1-комнатные</span>
                        <span class="card__prices-rooms__item-price">от 4,4 млн р</span>
                      </div>
                      <!-- rooms__item -->
                      <div class="card__prices-rooms__item">
                        <span class="card__prices-rooms__item-accent">4-комнатные +</span>
                        <span class="card__prices-rooms__item-price">от 4,4 млн р</span>
                      </div>
                      <!-- rooms__item -->
                      <div class="card__prices-rooms__item">
                        <span class="card__prices-rooms__item-accent">2-комнатные</span>
                        <span class="card__prices-rooms__item-price">от 4,4 млн р</span>
                      </div>
                    </div>
                  </div>
                  <div class="card__prices-footer">
                    <div class="card__prices-footer__row">
                      <a href="#map" class="card__prices-footer__link">Тюмень, Чаркова 72 — 1.1</a>
                      <button class="card__prices-footer__btn btn">Подробнее</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;

    cardsWrapper.insertAdjacentHTML("beforeend", cardHTML);

    createSlider(
      `.mySwiper${currentSliderCount}`,
      `.mySwiper${currentSliderCount}prev`,
      `.mySwiper${currentSliderCount}next`
    );
  }
}
export function initShowMore() {
  const showMoreBtn = document.querySelector(".cards__btn-show-more");
  showMoreBtn.addEventListener("click", showMoreCards);
}

let currentCreditCount = 6;
function showMoreCredits() {
  const creditsWrapper = document.querySelector(".credits__items-wrapper");

  for (let i = 0; i < 2; i++) {
    if (currentCreditCount >= 10) return;
    currentCreditCount++;

    const creditHTML = `
    <div class="credits__item">
    <img src="./img/credits/bank.svg" alt="" />
    <span>Абсолют Банк</span>
    <span>Строящееся жильё</span>
    <span>от 5.69%</span>
    <span>от 20.1%</span>
    <span>до 30</span>
    <span>от 16 251</span>
    <button class="credits__card-btn btn-outline">Подробнее</button>
    </div>
    `;

    creditsWrapper.insertAdjacentHTML("beforeend", creditHTML);
  }
}
export function initMoreCredits() {
  const creditsShowMoreBtn = document.querySelector(".credits__btn-show-more");
  creditsShowMoreBtn.addEventListener("click", showMoreCredits);
}

export function showMoreCardsMobile() {
  const cardsMediaSwiperWrapper = document.querySelector(".mySwiperCards");
  const cardsMediaSwiperRow = cardsMediaSwiperWrapper.querySelector(".swiper-wrapper");

  const cardsMediaShowMoreBtn = document.querySelector(".cards-media__btn-show-more");

  cardsMediaShowMoreBtn.addEventListener("click", () => {
    const cardMediaHTML = `
    <div class="cards-swiper__card swiper-slide">
      <img src="./img/cards/card-img01.jpg" alt="" />
      <div class="cards-swiper__card-body">
        <h3 class="card-swiper__title title-3">ЖК Чаркова 72</h3>
        <div class="card-swiper__quarter">3 квартал 2024 — <br />3 квартал 2025</div>
        <h3 class="card-swiper__price title-3">от&nbsp;4&nbsp;377&nbsp;600&nbsp;р</h3>
      </div>
    </div>
  `;

    cardsMediaSwiperRow.insertAdjacentHTML("beforeend", cardMediaHTML);

    cardsMediaSwiper.update();
  });
}

export function showMoreCreditsMobile() {
  const creditsMediaSwiperWrapper = document.querySelector(".mySwiperBanks");
  const creditsMediaSwiperRow = creditsMediaSwiperWrapper.querySelector(".swiper-wrapper");

  const creditsMediaShowMoreBtn = document.querySelector(".credits-media__btn-show-more");

  creditsMediaShowMoreBtn.addEventListener("click", () => {
    const creditMediaHTML = `
    <div class="credits-media__swiper-bank swiper-slide">
      <div class="credits-media__bank-header">
        <img src="./img/credits/bank.svg" alt="" />
        <h3 class="title-3">Абсолют Банк</h3>
      </div>
      <ul class="credits-media__swiper-list">
        <li>Программа</li>
        <li>Строящееся жильё</li>
        <li>Ставка</li>
        <li>от 5.69%</li>
        <li>Первый взнос</li>
        <li>от 20.1%</li>
        <li>Срок, лет</li>
        <li>до 30</li>
        <li>Платёж руб./мес.</li>
        <li>от 16 251</li>
      </ul>
      <button class="credits__card-btn btn-outline">Подробнее</button>
    </div>
  `;
    creditsMediaSwiperRow.insertAdjacentHTML("beforeend", creditMediaHTML);

    creditsMediaSwiper.update();
  });
}
