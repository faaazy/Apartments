export function initFixedContacts() {
  const contactsFixedArrow = document.querySelector(".contacts-fixed__img");
  const contactsFixedRow = document.querySelector(".contacts-fixed__row");
  contactsFixedArrow.addEventListener("click", () => {
    contactsFixedRow.classList.toggle("contacts-fixed__row--hidden");
    contactsFixedArrow.classList.toggle("contacts-fixed__img--active");
  });
}
