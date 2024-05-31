import { getAboutDetails } from "../requests/aboutServices.js";

const getAbout = async () => {
  const result = await getAboutDetails();
  const data = Array.from(result.data)[0];
  if (!data.skills)
    return {
      name: "Jonathan Doe",
      skills: ["web desinger", "Photographer", "Creative Person"],
    };
  return data;
};
const bannerr = (data) => {
  const heroBg = document.getElementById("heroBg");
  heroBg.setAttribute("data-bg-image", data.bgImage);
  heroBg.style.backgroundImage = `url(assets/img/bg-hero.jpg)`;
  document.getElementById("name").innerText += ` ${data.name}`;

  const titlesContainer = document.getElementById("titles");
  data.skills.forEach((skill, index) => {
    const span = document.createElement("span");
    span.innerText = skill;
    if (index === 0) {
      span.classList.add("active");
    }
    titlesContainer.appendChild(span);
  });
};

const showBanner = async () => {
  const datas = await getAbout();
  bannerr(datas);
};

export const bannerEventListeners = () => {
  showBanner();
};
