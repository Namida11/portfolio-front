import ApiRequest from "./baseRequest.js";
import {
  APPLICATION_CREATE_ENDPOINT,
  APPLICATION_ENDPOINT,
} from "../url-helper.js";

const _application = new ApiRequest();

export const getApplicationDetails = async () => {
  const res = await _application.get(APPLICATION_ENDPOINT);
  return await res.json();
};

export const createApplicationRequest = async (applicationData) => {
  const res = await _application.post(
    APPLICATION_CREATE_ENDPOINT,
    applicationData
  );
  return await res.json();
};
