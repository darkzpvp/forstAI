import axios from "axios"

const clienteAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_LARAVEL,
    
    headers:{
        'Accept' : 'application/json',
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: true

})

export default clienteAxios