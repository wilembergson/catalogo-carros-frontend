import axios from "axios"

import BASE_URL from "./baseURL"

async function listVehicles(){
    return axios.get(`${BASE_URL}/vehicles`)
}

async function getVehicleById(id: number){
    return axios.get(`${BASE_URL}/vehicles/${id}`)
}
const api = {
    listVehicles,
    getVehicleById
}
export default api