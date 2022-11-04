import axios from "axios"

import BASE_URL from "./baseURL"

const token:any = localStorage.getItem("token")

export type LoginBody = {
    userLogin: string,
    password: string
}

export type VehicleInsertData = {
    name: string;
    brand: string;
    model: string;
    price: string;
    picture: string;
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

async function newVehicle(data:VehicleInsertData){
    return await axios.post(`${BASE_URL}/vehicles`, 
        data,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
    )
}
const api = {
    listVehicles,
    getVehicleById,
    login,
    newVehicle
}
export default api