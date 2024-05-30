import { getAboutDetails } from "../requests/aboutServices.js";

const tsTitleDiv = document.querySelector("#about-me .container .ts-title");

const newElement = document.createElement("div");



const getAllAbout = async () => {
  const result = await getAboutDetails();
  return result.data;
};

const bindAbout = async (datas) => {
  let res = "";
  datas = await Array.from(datas);
  console.log(datas, " about");
  datas.forEach((data) => {
    res += `<div class="row ts-align__vertical">
              <div class="col-md-6">
                <img
                  src="${data.image.url}"
                  alt=""
                  class="mw-100 mb-5"
                />
              </div>
              <div class="col-md-6">
                <h4 class="ts-bubble-border">Hi There</h4>
                <p>
                  In id nulla magna. Nullam posuere fermentum mattis. Nunc id
                  dui at sapien faucibus fermentum ut vel diam. Nullam tempus,
                  nunc id efficitur sagittis, urna est ultricies eros, ac porta
                  sem turpis quis leo. Nulla in feugiat elit.
                </p>
                <dl class="ts-column-count-2">
                  <dt>Name:</dt>
                  <dd>${data.name}</dd>
                  <dt>Phone:</dt>
                  <dd>${data.phone}</dd>
                  <dt>Email:</dt>
                  <dd>${data.email}</dd>
                  <dt>Twitter:</dt>
                  <dd>${data.twitter}</dd>
                </dl>
                <hr class="ts-hr-light mb-5" />
                <a href="#contact" class="ts-btn-effect mr-2">
                  <span class="ts-visible btn btn-primary ts-btn-arrow"
                    >Contact Me</span
                  >
                  <span
                    class="ts-hidden btn btn-primary ts-btn-arrow"
                    data-bg-color="#d44729"
                    >Contact Me</span
                  >
                </a>
                <!--<a href="#contact" class="btn btn-primary ts-btn-arrow mr-2">Contact Me</a>-->
                <!--<a href="#contact" class="btn btn-outline-light ts-btn-border-light">-->
                <!--<i class="fa fa-download small mr-2"></i>-->
                <!--Download CV-->
                <!--</a>-->
                <a href="#contact" class="ts-btn-effect mr-2">
                  <span class="ts-visible btn btn-outline-light">
                    <i class="fa fa-download small mr-2"></i>
                    Download CV
                  </span>
                  <span class="ts-hidden btn btn-light bg-white">
                    <i class="fa fa-download small mr-2"></i>
                    Download CV
                  </span>
                </a>
              </div>
            </div>`;
  });
  newElement.innerHTML = res;
  tsTitleDiv.parentNode.insertBefore(newElement, tsTitleDiv.nextSibling);
};

const showAbout = async () => {
  const datas = await getAllAbout();
  bindAbout(datas);
};
export const aboutEventListeners = () => {
  showAbout();
  console.log("about listeners");
};
