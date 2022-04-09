// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const menuLinks = document.querySelectorAll(".menu-tabs__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.documentElement.classList.remove("menu-open");
  });
});
