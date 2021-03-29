function populateBenefitsItem(item, htmlItem) {
  htmlItem.querySelector(
    ".benefits__image-container"
  ).style.background = `url(${item.image}) center no-repeat`;
  htmlItem.querySelector(".item-title").textContent = item.title;
  htmlItem.querySelector(".item-description").textContent = item.description;
}

function populateCustomersItem(item, htmlItem) {
  const img = htmlItem.querySelector(".customers__image");
  img.src = item.image;
  img.alt = item.title;
  htmlItem.querySelector(".item-title").textContent = item.title;
  htmlItem.querySelector(".item-description").textContent = item.description;
}

function populateTeamItem(item, htmlItem) {
  const img = htmlItem.querySelector(".team__image");
  img.src = item.image;
  img.alt = item.name;
  htmlItem.querySelector(".item-title").textContent = item.name;
  htmlItem.querySelector(".team__position").textContent = item.position;
  htmlItem.querySelector(".item-description").textContent = item.description;
}

function populateGalleryItem(item) {
  document.querySelector(".gallery__image").src = item.image;
  document.querySelector(".gallery__slide-description").textContent =
    item.description;
}

function populateProductsItem(item) {
  document.querySelector(
    ".products__image-container"
  ).style.background = `url(${item.image}) center/cover no-repeat`;
  document.querySelector(".products").querySelector(".item-title").textContent =
    item.name;
  document.querySelector(
    "#max-payload"
  ).innerHTML = `Max payload: <span class="item-description_span_bold">${item.features.max_payload}</span>`;
  document.querySelector(
    "#size"
  ).innerHTML = `Size: <span class="item-description_span_bold">${item.features.size}</span>`;
  document.querySelector(
    "#max-speed"
  ).innerHTML = `Max speed: <span class="item-description_span_bold">${item.features.max_speed}</span>`;
  document.querySelector(
    "#running-time"
  ).innerHTML = `Running time: <span class="item-description_span_bold">${item.features.running_time}</span>`;
  document.querySelector(
    "#charging-time"
  ).innerHTML = `Charging time: <span class="item-description_span_bold">${item.features.charging_time}</span>`;
}

export {
  populateBenefitsItem,
  populateCustomersItem,
  populateGalleryItem,
  populateProductsItem,
  populateTeamItem,
};
