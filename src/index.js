import { aboutEventListeners } from "./pages/about.js";
import { allApplicationEventListeners } from "./pages/application.js";
import { portfolioEventListeners } from "./pages/portfolio.js";
import { serviceEventListeners } from "./pages/services.js";
import { skillsEventListeners } from "./pages/skill.js";
import { testimonialEventListeners } from "./pages/testimonial.js";

const onload = () => {
  serviceEventListeners(), aboutEventListeners();
  skillsEventListeners();
  portfolioEventListeners();
  testimonialEventListeners();
  allApplicationEventListeners();
};
document.addEventListener("DOMContentLoaded", onload);
