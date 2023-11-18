import axios from "axios";

export default class CrudServices {
    AxiosBackendClient = {}

    constructor(){
        this.AxiosBackendClient = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
            headers: {
              'Content-Type': 'application/json',
            },
        })
    }

    async getRequest(endpoint) {
        return await this.AxiosBackendClient.get(`${endpoint}`)
                                       .then(response => response);
      }
      
    async postRequest(endpoint, payload) {
        return await this.AxiosBackendClient.post(`${endpoint}`, payload)
                                       .then(response => response);
      }
      
    async putRequest(endpoint, payload) {
        return await this.AxiosBackendClient.put(`${endpoint}`, payload)
                                       .then(response => response);
      }
      
    async patchRequest(endpoint, payload) {
        return await this.AxiosBackendClient.patch(`${endpoint}`, payload)
                                       .then(response => response);
      }
      
    async deleteRequest(endpoint) {
        return await this.AxiosBackendClient.delete(`${endpoint}`)
                                       .then(response => response);
      }
}