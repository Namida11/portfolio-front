import { config } from "../config.js";

export default class ApiRequest {
  async get(endpoint) {
    return await fetch(`${config.baseUrl}/${endpoint}`);
  }

  async post(endpoint, data) {
    return await fetch(`${config.baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
