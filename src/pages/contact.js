import { getContactDetails } from "../requests/contactService.js";
const contactWrap = document.querySelector("#contactWrapper");
const getAllContact = async () => {
  const result = await getContactDetails();
  return result.data;
};

const bindContact = async (datas) => {
  datas = Array.from(datas);
  let res = "";

  datas.forEach((data) => {
    res += `  <div class="col-sm-6 col-md-3 mb-4" data-aos="fade-up">
                <img src="${data.image.url}" class="mb-4" alt="" />
                <h5>${data.name}</h5>
                <div class="ts-opacity__50">
                  <figure class="mb-0">${data.info}</figure>
                </div>
                <!--end ts-opacity__50-->
              </div>`;
  });
  contactWrap.innerHTML = res;
};
const showContact = async () => {
  const datas = await getAllContact();
  await bindContact(datas);
};
export const contactEventListener = () => {
  showContact();
};
