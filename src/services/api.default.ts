import axios from 'axios';

const api = axios.create({
    baseURL:'https://books.ioasys.com.br/api/v1/',
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Accept':'application/json',
        'Content-Type':'application/json',
    },
    withCredentials:true
})

export default api;