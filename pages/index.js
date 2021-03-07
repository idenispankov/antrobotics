function addBenefits() {
  const benefitsContainer = document.querySelector(".benefits__container");
  const benefitsElementTemplate = document.querySelector("#benefits-template")
    .content;
  data.benefits.map((item) => {
    const benefitsItem = benefitsElementTemplate.cloneNode(true);
    benefitsItem.querySelector(".benefits__image-container").style.background = `url(${item.image}) center no-repeat`;
    benefitsItem.querySelector(".item-title").textContent = item.title;
    benefitsItem.querySelector(".item-description").textContent =
      item.description;
    benefitsContainer.append(benefitsItem);
  });
}
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

addBenefits();
addTeam();
