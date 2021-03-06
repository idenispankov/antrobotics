function addBenefits() {
  const benefitsContainer = document.querySelector(".benefits__container");
  const benefitsElementTemplate = document.querySelector("#benefit-template").content;
  data.benefits.map((item) => {
    const benefitsItem = benefitsElementTemplate.cloneNode(true);
    const img = benefitsItem.querySelector(".benefits__image");
    img.src = item.image;
    img.alt = item.title;
    benefitsItem.querySelector(".item-title").textContent = item.title;
    benefitsItem.querySelector(".item-description").textContent = item.description;
    benefitsContainer.append(benefitsItem);
  });
}

addBenefits();
