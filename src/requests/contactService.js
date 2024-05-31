import ApiRequest from "./baseRequest.js";
import { CONTACT_ENDPOINT } from "../url-helper.js";

const _contact = new ApiRequest();

export const getContactDetails = async () => {
  const res = await _contact.get(CONTACT_ENDPOINT);
  return await res.json();
};
