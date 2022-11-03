import axios from "axios"

import BASE_URL from "./baseURL"

async function lisVehicles(){
    return axios.get(`${BASE_URL}/vehicles`)
}

const api = {
    lisVehicles
}
export default api