import Carousel from "../scripts/Carousel.js";
import Popup from "../scripts/Popup.js";
import Navbar from "../scripts/Navbar.js";
import Inflator from "../scripts/Inflator.js";
import {
  populateBenefitsItem,
  populateGalleryItem,
  populateCustomersItem,
  populateProductsItem,
  populateTeamItem,
} from "../scripts/populate.js";

// Create Navbar
new Navbar({
  navbarClass: "navbar",
  bannerClass: "banner",
  menuBtnClass: "menu-btn",
}).create();

// Create popup
new Popup({
  popupClass: "popup",
  popupOpenClass: "popup_state_open",
  closeBtnClass: "popup__form-close",
  openBtn: "work__button",
  navBarClass: "navbar",
}).create();

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
