import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

class Provider {
  getAll(resource) {
    return axios.get(`${BASE_URL}/${resource}`);
  }
  get(resource, id) {
    return axios.get < `${BASE_URL}/${resource}/${id}`;
  }
  create(resource, params) {
    return axios.post(`${BASE_URL}/${resource}`, params);
  }
  update(resource, params, id) {
    return axios.put(`${BASE_URL}/${resource}/${id}`, params);
  }
  delete(resource, id) {
    return axios.delete(`${BASE_URL}/${resource}/${id}`);
  }
  deleteAll(resource) {
    return axios.delete(`${BASE_URL}/${resource}`);
  }
}
export default new Provider();
