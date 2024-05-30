import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { getTestimonialDetails } from "../requests/testimonialService.js";

const testimonialWrap = document.querySelector("#testimonialWrap");

const getAllTestimonial = async () => {
  const result = await getTestimonialDetails();
  console.log(result, "testimonialll");
  return result.data;
};

const bindTestimonial = async (datas) => {
  datas = Array.from(datas);
  let res = "";
  datas.forEach((data) => {
    res += `<div class="swiper-slide mb-5">
              <figure class="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                <i class="fa fa-quote-right"></i>
              </figure>
              <p class="ts-h5">${data.review}</p>
              <div class="ts-circle__lg mb-3" style="background-image: url(${data.image.url});"></div>
              <h5>${data.fullname}</h5>
              <h6 class="ts-opacity__40">${data.position}</h6>
            </div>`;
  });
  testimonialWrap.innerHTML = `<div class="swiper-wrapper">${res}</div>
                               <div class="swiper-pagination"></div>`;
};

const showTestimonial = async () => {
  const datas = await getAllTestimonial();
  await bindTestimonial(datas);
  const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
  });
};

export const testimonialEventListeners = () => {
  showTestimonial();
  console.log("testimonial events");
};
