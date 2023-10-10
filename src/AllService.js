import axios from "axios"
import * as Storage from './Storage.js'

const BASE_URL = "http://api-nbs-thalassemia.exhortbd.com/"

async function POSTCall(urlPart, formData, header = {}){
    const variables = {
        method: 'post',
        url: BASE_URL+urlPart,
        data : formData,
        headers: header
        
    }
    console.log('variables', variables)
    try {
        const response = await axios(variables)
        console.log("PostRequest response", response)
        if(response?.status === 200){
            return response.data
        }else{
            console.log("PostRequest error", response?.status)
        }
        
    } catch (error) {
        console.log("PostRequest tryError",error)
        return false
    }
}

async function GETCall(urlPart, header = {}){
    const variables = {
        method: 'get',
        url: BASE_URL+urlPart,
        headers: header
    }
    console.log('variables', variables)
    try {
        const response = await axios(variables)
        console.log("GETRequest response", response)
        if(response?.status === 200){
            return response.data
        }else{
            console.log("GETRequest error", response?.status)
            return false
        }
        
    } catch (error) {
        console.log("GETRequest tryError",error)
        return false
    }
}

export async function checkLogin(email, password){

    const variables = {
        "email": email,
        "password": password
    }
    const response = await POSTCall("api/v1/auth/signin", variables)
    if(response?.code === 0){
        Storage.setInLocalStorage("loginData", response?.data)
        console.log("checkLogin ", response?.data)
       return true
    }else{
        return false
    }
    
}

export async function PostRequest(data){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}
    const apiName = data?.hospitalId? "api/v1/vault/nurse" : "api/v1/vault/hospital"
    const response = await POSTCall(apiName, data, header)

    if(response?.code === 0){
        console.log("PostRequest ", response)
       return true
    }else{
        return false
    }
}

export async function getHospitalList(){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}

    const response = await GETCall("api/v1/vault/hospitals", header)

    if(response?.code === 0){
        console.log("getHospitalList ", response?.data?.hospitals)
        Storage.setInLocalStorage('hospitalList', response?.data?.hospitals)
       return true
    }else{
        return false
    }
}

export async function getNursList(){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}

    const response = await GETCall("api/v1/vault/nurses", header)

    if(response?.code === 0){
        console.log("getNursList ", response?.data?.nurses)
        Storage.setInLocalStorage('nursesList', response?.data?.nurses)
       return true
    }else{
        return false
    }
}

export function logOut(){
    Storage.clearLocalStorage('loginData')
    Storage.clearLocalStorage('hospitalList')
    Storage.clearLocalStorage('nursesList')
}