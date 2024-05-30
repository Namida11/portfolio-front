import ApiRequest from "./baseRequest.js";
import { PORTFOLIO_ENDPOINT } from "../url-helper.js";
const _portfolio = new ApiRequest();

export const getPortfolioDeatils = async () => {
  const res = await _portfolio.get(PORTFOLIO_ENDPOINT);
  return await res.json();
};