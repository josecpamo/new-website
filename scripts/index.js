import hamburguerMenu from "./hamburguer_menu.js";
import menuScroll from "./menu-scroll.js";

document.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(
      ".hamburguer-ctn",
      ".hamburguer-panel",
      "#hamburguer-btn, #hamburguer-btn img",
      ".hamburguer-link"
    );
    menuScroll();
})