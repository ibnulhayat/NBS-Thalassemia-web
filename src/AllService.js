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
    const apiName = data?.mobileNumber?  'api/v1/vault/baby-info': data?.hospitalId? "api/v1/vault/nurse": "api/v1/vault/hospital"
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
       return response?.data?.hospitals
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
       return response?.data?.nurses
    }else{
        return false
    }
}

export async function getBabyList(){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}

    const response = await GETCall("api/v1/vault/baby-infos", header)

    if(response?.code === 0){
        console.log("babysList ", response?.data?.infos)
        Storage.setInLocalStorage('babysList', response?.data?.infos)

       return response?.data?.infos
    }else{
        return false
    }
}


export async function getDashBoardData(){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}

    const response = await GETCall("api/v1/vault/sms/send", header)

    if(response?.code === 0){
        console.log("summaries ", response?.data?.summaries)
        Storage.setInLocalStorage('summaries', response?.data?.summaries)

       return response?.data?.summaries
    }else{
        return false
    }
}

export async function sendSMS(dataForm){
    const message = Storage.getLocalStorageData('editsms')

    const variables = {
        method: 'get',
        url: "https://www.24bulksmsbd.com/api/smsSendApi",
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            "customer_id":"558",
            "api_key":"177980160885496101729099480",
            "message": dataForm?.testResult === "TRT_POSITIVE"? `${dataForm?.babyMotherName} ${message?.positiveMessage}`
                : `${dataForm?.babyMotherName} ${message?.negativeMessage}`,
            "mobile_no":dataForm?.mobileNumber
        }
    }
    try {
        const response = await axios(variables)
        console.log("sendSMS response", response)
        if(response?.status === 200){
            return response
        }else{
            console.log("sendSMS error", response?.status)
            return false
        }
        
    } catch (error) {
        console.log("sendSMS tryError",error)
        return false
    }
}

export function logOut(){
    Storage.clearLocalStorage('loginData')
    Storage.clearLocalStorage('hospitalList')
    Storage.clearLocalStorage('nursesList')
    Storage.clearLocalStorage('babysList')
    Storage.clearLocalStorage('summaries')
}