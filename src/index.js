import AOS from "aos";
import "aos/dist/aos.css";

import { aboutEventListeners } from "./pages/about.js";
import { allApplicationEventListeners } from "./pages/application.js";
import { contactEventListener } from "./pages/contact.js";
import { portfolioEventListeners } from "./pages/portfolio.js";
import { serviceEventListeners } from "./pages/services.js";
import { skillsEventListeners } from "./pages/skill.js";
import { testimonialEventListeners } from "./pages/testimonial.js";
import { bannerEventListeners } from "./pages/banner.js";

const onload = () => {
  AOS.init();
  bannerEventListeners();
  serviceEventListeners(), aboutEventListeners();
  skillsEventListeners();
  portfolioEventListeners();
  testimonialEventListeners();
  allApplicationEventListeners();
  contactEventListener();
};
document.addEventListener("DOMContentLoaded", onload);
