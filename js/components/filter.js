export function initBadges() {
  const badges = document.querySelectorAll(".badge");

  badges.forEach((item) => {
    item.addEventListener("click", (event) => {
      const badgeRemove = item.querySelector(".badge__remove");
      if (event.target == item) {
        item.classList.toggle("badge--active");
        badgeRemove.classList.toggle("none");
      }
    });
  });
}

export function initRangeSlider() {
  const titleMin = document.getElementById("title-min");
  const titleMax = document.getElementById("title-max");

  const inputLeft = document.getElementById("input-left");
  const inputRight = document.getElementById("input-right");

  const dotLeft = document.getElementById("dot-left");
  const dotRight = document.getElementById("dot-right");

  const sliderRange = document.getElementById("slider-range");

  function setLeftValue() {
    let value = this.value;
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    value = Math.min(parseInt(value), parseInt(inputRight.value) - 1);

    let stringValue = value.toString().slice(0, -1) + "," + value.toString().slice(-1);
    let numValue = Number(value.toString().slice(0, -1) + "." + value.toString().slice(-1));

    let percent = ((numValue * 10 - min) / (max - min)) * 100;

    sliderRange.style.left = percent + "%";
    dotLeft.style.left = percent + "%";
    titleMin.innerText = stringValue;
  }
  function setRightValue() {
    let value = this.value;
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    value = Math.max(parseInt(value), parseInt(inputLeft.value) + 1);

    let stringValue = value.toString().slice(0, -1) + "," + value.toString().slice(-1);
    let numValue = Number(value.toString().slice(0, -1) + "." + value.toString().slice(-1));

    let percent = ((numValue * 10 - min) / (max - min)) * 100;

    sliderRange.style.right = 100 - percent + "%";
    dotRight.style.right = 100 - percent + "%";
    titleMax.innerText = stringValue;
  }
  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);

  // Filter
  const filterIcons = document.querySelectorAll(".form__item--filter__img");
  const formFilterWrappers = document.querySelectorAll(".form__item--filter__menu");
  const filterMenuClose = document.querySelectorAll(".form__item--filter__menu-close");

  filterIcons.forEach((item) => {
    item.addEventListener("click", () => {
      item.nextElementSibling.classList.remove("none");
    });
  });
  formFilterWrappers.forEach((item) => {
    item.addEventListener("click", (event) => {
      filterMenuClose.forEach((close) => {
        if (event.target === item || event.target === close) {
          item.classList.add("none");
        }
      });
    });
  });
}
