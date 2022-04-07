import axios from "axios";


export function postRegister(body: any){
    console.log(body)
        return axios.post('http://localhost:3001/api/register', body)
    }


 export function postLogin(body: any){

        return axios.post('http://localhost:3001/api/login', body)

    }

