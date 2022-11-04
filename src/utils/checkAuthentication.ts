export const getToken = () => {
    let token:string|null = null
    if(localStorage.getItem("token")) {
        token = localStorage.getItem("token")
    }    
    return token
}