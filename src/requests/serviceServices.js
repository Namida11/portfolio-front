import ApiRequest from "./baseRequest.js";
import { SERVICE_ENDPOINT } from "../url-helper.js";
const _service = new ApiRequest();

export const getServiceDeatils = async () => {
  const res = await _service.get(SERVICE_ENDPOINT);
  return await res.json();
};
