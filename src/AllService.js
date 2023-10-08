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
        return response
    } catch (error) {
        
    }
}

export async function checkLogin(email, password){

    const variables = {
        "email": email,
        "password": password
    }
    // const response = await PostRequest("api/v1/auth/signin", variables)
    Storage.setInLocalStorage("loginData", variables)
   return true
    // console.log("checkLogin ", response)
}