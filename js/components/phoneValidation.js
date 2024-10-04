export function initPhoneValidation() {
  mask("[data-tel-input]");

  const phoneInput = document.querySelector("[data-tel-input]");
  phoneInput.addEventListener("input", () => {
    if (phoneInput.value == "+") phoneInput.value = "";
  });
  phoneInput.addEventListener("blur", () => {
    if (phoneInput.value == "+") phoneInput.value = "";
  });
}
