import ApiRequest from "./baseRequest.js";
import { SKILL_ENDPOINT } from "../url-helper.js";

const _skill = new ApiRequest();

export const getSkillDetails = async () => {
  const res = await _skill.get(SKILL_ENDPOINT);
  return await res.json();
};
