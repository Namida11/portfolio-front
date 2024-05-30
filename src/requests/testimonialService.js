import ApiRequest from "./baseRequest.js";

import { TESTIMONIAL_ENDPOINT } from "../url-helper.js";

const _testimonial = new ApiRequest();

export const getTestimonialDetails = async () => {
  const res = await _testimonial.get(TESTIMONIAL_ENDPOINT);

  return await res.json();
};
