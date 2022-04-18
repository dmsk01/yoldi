// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const menuLinks = document.querySelectorAll(".menu-tabs__link");
const pageTitle = document.querySelector("title");

function addActiveToHeaderLink(pageTitle, link) {
  pageTitle.textContent === link.textContent
    ? link.classList.add("_active")
    : null;
}
if (menuLinks) {
  menuLinks.forEach((link) => {
    window.addEventListener("load", function () {
      setTimeout(function () {
        addActiveToHeaderLink(pageTitle, link);
      }, 0);
    });
    link.addEventListener("click", () => {
      document.documentElement.classList.remove("menu-open");
    });
  });
}
