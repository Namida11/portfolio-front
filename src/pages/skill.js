import { getSkillDetails } from "../requests/skillServices.js";

const skillWrapper = document.querySelector("#my-skills .skills-wrapper");

const getAllSkills = async () => {
  const result = await getSkillDetails();
  console.log(result.data);
  return result.data;
};

const bindSkills = async (datas) => {
  let res = "";
  datas = await Array.from(datas);
  console.log(datas, " skills");
  datas.forEach((data) => {
    const progressWidth = `${data.percentage}%`;
    console.log(progressWidth);
    res += `  <div class="progress" data-progress-width="${data.percentage}%">
                  <h5 class="ts-progress-title">${data.name}</h5>
                  <figure class="ts-progress-value" style="left: ${progressWidth};">
                  ${progressWidth}</figure>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="${data.percentage}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: ${progressWidth}"
                  >
                    
                  </div>
                </div>`;
  });

  skillWrapper.innerHTML = res;
};

const showSkills = async () => {
  const datas = await getAllSkills();
  bindSkills(datas);
};

export const skillsEventListeners = () => {
  showSkills();
  console.log("skills listeners");
};
