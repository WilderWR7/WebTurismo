import axios from "axios";

const turismoDB = axios.create({
    baseURL: 'http://192.168.1.9:3200/api/v1',
    // params: {
    //     api_key: 'c971b32f38e951b14121b465d8ff7da5',
    //     language: 'es-ES'
    // }
})


export default turismoDB;