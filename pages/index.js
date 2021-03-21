import Carousel from "../components/Carousel.js";

// Hamburger Menu
const navBar = document.querySelector(".navbar");
const navLogo = document.querySelector(".navbar__logo");
const navSocial = document.querySelector(".navbar__social");
const navList = document.querySelector(".navbar__list");
const navLinks = document.querySelectorAll(".navbar__list-link");
const menuBtn = document.querySelector(".menu-btn");

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

// Scroll style change
window.addEventListener("scroll", () => {
  if (window.scrollY > "400") {
    (navBar.style.background = "#efefef"), (navBar.style.color = "#000");
    navLogo.style.color = "#000";
    navSocial.style.color = "#000";
    navList.style.background = "#efefef";
    navLinks.forEach((link) => (link.style.color = "#000"));
  } else {
    (navBar.style.background = "#393939"), (navBar.style.color = "#fff");
    navLogo.style.color = "#fff";
    navSocial.style.color = "#fff";
    navList.style.background = "#393939";
    navLinks.forEach((link) => (link.style.color = "#fff"));
  }
});

// Add Benefits
function addBenefits() {
  const benefitsContainer = document.querySelector(".benefits__container");
  const benefitsElementTemplate = document.querySelector("#benefits-template")
    .content;
  data.benefits.map((item) => {
    const benefitsItem = benefitsElementTemplate.cloneNode(true);
    benefitsItem.querySelector(
      ".benefits__image-container"
    ).style.background = `url(${item.image}) center no-repeat`;
    benefitsItem.querySelector(".item-title").textContent = item.title;
    benefitsItem.querySelector(".item-description").textContent =
      item.description;
    benefitsContainer.append(benefitsItem);
  });
}

// Customers
function addCustomers() {
  const customersContainer = document.querySelector(".customers__container");
  const customersElementTemplate = document.querySelector("#customers-template")
    .content;
  data.customers.map((item) => {
    const customersItem = customersElementTemplate.cloneNode(true);
    const img = customersItem.querySelector(".customers__image");
    img.src = item.image;
    img.alt = item.title;
    customersItem.querySelector(".item-title").textContent = item.title;
    customersItem.querySelector(".item-description").textContent =
      item.description;
    customersContainer.append(customersItem);
  });
}

// Add Team
function addTeam() {
  const teamContainer = document.querySelector(".team__container");
  const teamElementTemplate = document.querySelector("#team-template").content;
  data.team.map((item) => {
    const teamItem = teamElementTemplate.cloneNode(true);
    const img = teamItem.querySelector(".team__image");
    img.src = item.image;
    img.alt = item.name;
    teamItem.querySelector(".item-title").textContent = item.name;
    teamItem.querySelector(".team__position").textContent = item.position;
    teamItem.querySelector(".item-description").textContent = item.description;
    teamContainer.append(teamItem);
  });
}

// Gallery item
function populateGalleryItem(item) {
  document.querySelector(
    ".gallery__image-container"
  ).style.background = `url(${item.image}) center/cover no-repeat`;
  document.querySelector(".gallery__slide-description").textContent =
    item.description;
}

// Products Item
function populateProductsItem(item) {
  document.querySelector(
    ".products__image-container"
  ).style.background = `url(${item.image}) center/cover no-repeat`;
  document.querySelector(".products").querySelector(".item-title").textContent =
    item.name;
  document.querySelector(
    "#max-payload"
  ).textContent = `Max payload: ${item.features.max_payload}`;
  document.querySelector("#size").textContent = `Size: ${item.features.size}`;
  document.querySelector(
    "#max-speed"
  ).textContent = `Max speed: ${item.features.max_speed}`;
  document.querySelector(
    "#running-time"
  ).textContent = `Running time: ${item.features.running_time}`;
  document.querySelector(
    "#charging-time"
  ).textContent = `Charging time: ${item.features.charging_time}`;
}

// Gallery Carousel
const galleryCarousel = new Carousel({
  data: data.gallery,
  btnBackClass: "gallery__button-back",
  btnForwardClass: "gallery__button-forward",
  populateItem: populateGalleryItem,
});

// Products Carousel
const productsCarousel = new Carousel({
  data: data.products,
  btnBackClass: "products__button-back",
  btnForwardClass: "products__button-forward",
  populateItem: populateProductsItem,
});

// Popup
const popup = document.querySelector(".popup");
const inputs = document.querySelectorAll(".popup__form-input");
// const formButton = document.querySelector(".work__button");

function openPopup() {
  popup.classList.add("popup-open");
  inputs.forEach((input) => (input.value = ""));
}

function closePopup(e) {
  if (
    e.target.classList.contains("popup__form-close") ||
    e.target.classList.contains("popup")
  ) {
    popup.classList.remove("popup-open");
  }
}

function escClosePopup(e) {
  if (e.key === "Escape") {
    popup.classList.remove("popup-open");
  }
}

//formButton.addEventListener("click", openPopup);
document.addEventListener("click", closePopup);
document.addEventListener("keyup", escClosePopup);

// Functions Call
galleryCarousel.generateCarousel();
productsCarousel.generateCarousel();
addBenefits();
addTeam();
addCustomers();
