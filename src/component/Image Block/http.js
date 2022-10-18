import axios from "axios"
import { toast } from "react-toastify"
import { BASE_URL } from "./config"

const axiosInterceptor=(config)=>{
config.headers.accept='application/json'
return config
}

export const http = axios.create({
    baseURL:BASE_URL,
    headers:{}
})

http.interceptors.request.use(axiosInterceptor)
http.interceptors.response.use((res)=>res,(error)=>{
    if(error&&error.res){
        if(error.res.status!==200){
            toast.error("Invalid api request by hasna")
        }
    }
    return Promise.reject(error)
})