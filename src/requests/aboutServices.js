import ApiRequest from "./baseRequest.js";
import { ABOUT_ENDPOINT } from "../url-helper.js";

const _about = new ApiRequest();

export const getAboutDetails = async () => {
  const res = await _about.get(ABOUT_ENDPOINT);
  return await res.json();
};
