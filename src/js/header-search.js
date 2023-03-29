import refs from "./refs";

refs.headerSearchBtn.addEventListener("click", toggleSearchMenu);

function toggleSearchMenu() {
  refs.searchMenu.classList.toggle("is-hidden");
}

refs.headerLanguageBtn.addEventListener("click", toggleLanguageMenu);

function toggleLanguageMenu() {
  refs.languageMenu.classList.toggle("is-hidden");
}

console.log(SKDJFHLSKJDFHLSKJ);
console.log(refs.headerLanguageBtn);
console.log(refs.headerSearchBtn);
