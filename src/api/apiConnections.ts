import axios from "axios"

import BASE_URL from "./baseURL"

export type LoginBody = {
    userLogin: string,
    password: string
}

async function listVehicles(){
    return axios.get(`${BASE_URL}/vehicles`)
}

async function getVehicleById(id: number){
    return axios.get(`${BASE_URL}/vehicles/${id}`)
}

async function login(login:LoginBody){
    return axios.post(`${BASE_URL}/login`, login)
}
const api = {
    listVehicles,
    getVehicleById,
    login
}
export default api