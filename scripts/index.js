const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");
const popupCloseButton = document.getElementById("popup__close");

function showPopup() {
  popupOverlay.style.display = "block";
}

function hidePopup() {
  popupOverlay.style.display = "none";
}

popupCloseButton.addEventListener("click", hidePopup);

const menu = document.getElementById("header");
const menuSwitchButton = document.getElementById("header-burger");
const menuList = document.getElementById("header-nav__list");
const content = document.getElementById("content");

function menuSwitch() {
  menu.classList.toggle("header--mobile");
  menuSwitchButton.classList.toggle("header-burger--close");
  menuList.classList.toggle("header-nav__list--mobile");
  content.classList.toggle("content--mobile");
}
