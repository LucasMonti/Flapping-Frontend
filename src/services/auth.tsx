import axios from "axios";


export function registerCompany(body: any){
        return axios.post('http://localhost:3001/api/companies/create', body)
    }


export function registeruser(body: any){
    return axios.post('http://localhost:3001/api/users/create', body)
}


 export function postLogin(body: any){

        return axios.post('http://localhost:3001/api/login', body)

    }

