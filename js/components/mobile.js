// Mobile
export function initMobileMenu() {
  const navBtn = document.querySelector(".nav-icon-btn");
  const navIcon = document.querySelector(".nav-icon");
  const headerRow = document.querySelector(".header__row");

  navBtn.onclick = function () {
    navIcon.classList.toggle("nav-icon--active");
    headerRow.classList.toggle("header__row--mobile");
    document.body.classList.toggle("no-scroll");
  };

  document.addEventListener("click", (event) => {
    if (event.target.closest(".header__row--mobile") && event.target.closest(".nav__list-link")) {
      headerRow.classList.remove("header__row--mobile");
      navIcon.classList.remove("nav-icon--active");
      document.body.classList.remove("no-scroll");
    }
  });
}
