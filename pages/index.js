import Carousel from "../scripts/Carousel.js";
import Inflator from "../scripts/Inflator.js";
import {
  populateBenefitsItem,
  populateGalleryItem,
  populateCustomersItem,
  populateProductsItem,
  populateTeamItem,
} from "../scripts/populate.js";

// Hamburger Menu
const navBar = document.querySelector(".navbar");
const navLogo = document.querySelector(".navbar__logo");
const navSocial = document.querySelector(".navbar__social");
const navList = document.querySelector(".navbar__list");
const navLinks = document.querySelectorAll(".navbar__list-link");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelectorAll(".menu-btn__burger");
const menuBtnBurgerBefore = document.querySelector(".menu-btn__burger-before");
const menuBtnBurgerPresent = document.querySelector(
  ".menu-btn__burger-present"
);
const menuBtnBurgerAfter = document.querySelector(".menu-btn__burger-after");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navList.style.display = "flex";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navList.style.display = "none";
  }
});

const onresize = (e) => {
  let width = document.body.clientWidth;
  if (width > 400) {
    navList.style.display = "flex";
  }
};

window.addEventListener("resize", onresize);

// Scroll style change
window.addEventListener("scroll", () => {
  if (window.scrollY > "400") {
    (navBar.style.background = "#efefef"), (navBar.style.color = "#000");
    navLogo.style.color = "#000";
    navSocial.style.color = "#000";
    menuBtnBurgerBefore.style.backgroundColor = "#000";
    menuBtnBurgerPresent.style.backgroundColor = "#000";
    menuBtnBurgerAfter.style.backgroundColor = "#000";
    navList.style.background = "#efefef";
    menuBtnBurger.forEach((item) => (item.style.backgroundColor = "#000"));
    navLinks.forEach((link) => (link.style.color = "#000"));
  } else {
    (navBar.style.background = "#393939"), (navBar.style.color = "#fff");
    navLogo.style.color = "#fff";
    navSocial.style.color = "#fff";
    menuBtnBurgerBefore.style.backgroundColor = "#fff";
    menuBtnBurgerPresent.style.backgroundColor = "#fff";
    menuBtnBurgerAfter.style.backgroundColor = "#fff";
    navList.style.background = "#393939";
    menuBtnBurger.forEach((item) => (item.style.backgroundColor = "#fff"));
    navLinks.forEach((link) => (link.style.color = "#fff"));
  }
});



// Create and inflate all sections
new Carousel({
  data: data.gallery,
  btnBackClass: "gallery__button-back",
  btnForwardClass: "gallery__button-forward",
  populateItem: populateGalleryItem,
}).generateCarousel();

new Carousel({
  data: data.products,
  btnBackClass: "products__button-back",
  btnForwardClass: "products__button-forward",
  populateItem: populateProductsItem,
}).generateCarousel();

new Inflator({
  data: data.team,
  container: "team__container",
  template: "team-template",
  populateItem: populateTeamItem,
}).generateList();

new Inflator({
  data: data.benefits,
  container: "benefits__container",
  template: "benefits-template",
  populateItem: populateBenefitsItem,
}).generateList();

new Inflator({
  data: data.customers,
  container: "customers__container",
  template: "customers-template",
  populateItem: populateCustomersItem,
}).generateList();

