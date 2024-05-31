import { getPortfolioDeatils } from "../requests/portfolioService.js";
const cardWrapper = document.querySelector("#card-wrapper");

const allData = async () => {
  const result = await getPortfolioDeatils();
  console.log(result.data, "portfoliooo datas");
  console.log(result.data, "portfolioo");
  return result.data;
};

const bindPortfolio = async (datas) => {
  let res = "";
  datas = await Array.from(datas);
  if (datas.length !== 0) {
    datas.forEach((data) => {
      res += `<a
  href="${data.image.url}"
  class="card ts-gallery__item popup-image"
  data-aos="fade-up"
>
  <div class="ts-gallery__item-description">
    <h6 class="ts-opacity__50">${data.category}</h6>
    <h4>${data.name}</h4>
  </div>
  <img src="${data.image.url}" class="card-img" alt="" />
</a>
`;
    });
  }

  console.log(res);
  cardWrapper.innerHTML = res;
};

const showPortfolio = async () => {
  const allDataPortfolio = await allData();
  bindPortfolio(allDataPortfolio);
};

export const portfolioEventListeners = () => {
  showPortfolio();
  console.log("portfolio lisyeners");
};
