import { getServiceDeatils } from "../requests/serviceServices.js";

const serviceRow = document.querySelector("#service-row");

const allDatas = async () => {
  const result = await getServiceDeatils();
  return result.data;
};

const bindService = async (datas) => {
  let res = "";

  datas = await Array.from(datas);
  if (datas) {
    datas.forEach((data) => {
      res += `<div class="col-sm-6 col-md-4 col-xl-4">
                <div class="ts-item" data-animate="ts-fadeInUp">
                  <div class="ts-item-content">
                    <div class="ts-item-header">
                      <figure class="icon">
                        <img src="${data.image.url}" alt="" />
                      </figure>
                     
                    </div>
                   
                    <div class="ts-item-body">
                      <h4>${data.name}</h4>
                      <p class="mb-0">
                        ${data.description}
                      </p>
                    </div>
                  
                    <div class="ts-item-footer">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#modal"
                        class="ts-link-arrow-effect"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                 
                  </div>
                 
                </div>
               
              </div>`;
    });
  } else {
    res += `<h3>TEHERE  ARANOT SERVICES</h3>`;
  }

  serviceRow.innerHTML = res;
  console.log(serviceRow, "Servoce roww");
};
const showDatas = async () => {
  const datas = await allDatas();
  bindService(datas);
};

export const serviceEventListeners = () => {
  showDatas();
};
