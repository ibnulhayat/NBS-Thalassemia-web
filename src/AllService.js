import axios from "axios"
import * as Storage from './Storage.js'

const BASE_URL = "http://api-nbs-thalassemia.exhortbd.com/"

async function PostRequest(urlPart, formData){
    const variables = {
        method: 'post',
        url: BASE_URL+urlPart,
        data : formData
    }
    console.log('variables', variables)
    try {
        const response = await axios(variables)
        if(response?.status === 200){
            return response.data
        }else{
            console.log("PostRequest error", response?.status)
        }
        
    } catch (error) {
        console.log("PostRequest tryError",error)
    }
}

export async function checkLogin(email, password){

    const variables = {
        "email": email,
        "password": password
    }
    const response = await PostRequest("api/v1/auth/signin", variables)
    if(response?.code === 0){
        Storage.setInLocalStorage("loginData", response?.data)
        console.log("checkLogin ", response?.data)
       return true
    }else{
        return false
    }
    
}