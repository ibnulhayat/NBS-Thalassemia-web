import axios from "axios"
import { Navigate } from "react-router-dom"
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
        // console.log("PostRequest response", response)
        if(response?.status === 200){
            return response.data
        }
        
    } catch (error) {
        console.log("PostRequest tryError",error)
        return false
    }
}

async function GETCall(urlPart, header = {}, params = {}){
    const variables = {
        method: 'get',
        url: BASE_URL+urlPart,
        headers: header,
        params: params
    }
    // console.log('variables', variables)
    try {
        const response = await axios(variables)
        // console.log("GETRequest response", response)
        if(response?.status === 200){
            return response.data
        }
        
    } catch (error) {
        console.log("GETRequest tryError",error)
        if(error?.message == 'Network Error'){
            return 'Network Error'
        }else{
            return error?.response?.data
        }
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
        // console.log("checkLogin ", response?.data)
       return true
    }else{
        return false
    }
    
}

async function RefreshToken(){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}
    const apiName = 'api/v1/auth/refresh-access-token'
    const response = await POSTCall(apiName, {"refresh": auth?.refreshToken}, header)

    if(response?.code === 1){
        auth.accessToken = response?.data?.access
        console.log("RefreshToken ", auth,response?.data)
        Storage.setInLocalStorage("loginData", auth)
       return true
    }else{
        return false
    }
} 

export async function PostRequest(data){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}
    const apiName = data?.hospitalId? "api/v1/vault/nurse": "api/v1/vault/hospital"
    const response = await POSTCall(apiName, data, header)

    if(response?.code === 0){
        // console.log("PostRequest ", response)
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
        // console.log("getHospitalList ", response?.data?.hospitals)
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
        // console.log("getNursList ", response?.data?.nurses)
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
        // console.log("babysList ", response?.data?.infos)
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
        // console.log("summaries ", response?.data?.summaries)
        const newList = response?.data?.summaries?.length > 0 ?
            groupByHospitalId(response?.data?.summaries) : []
        Storage.setInLocalStorage('summaries', newList)

       return newList
    }else if(response?.message == "access token expired"){
       const response = await RefreshToken()
       if(response){
        return await getDashBoardData()
       }
    }else{
        return response
    }
}

function groupByHospitalId(list){
    let groundData = []
    for (let index = 0; index < list.length; index++) {
        const existIndex = groundData.findIndex(ele => ele.hospitalId === list[index].hospitalId)

        if(existIndex === -1){
        groundData.push({
            hospitalId: list[index].hospitalId,
            hospitalName: list[index].hospitalName,
            negative: CallTot(list.filter(ele => ele.type === 2 && ele.hospitalId === list[index].hospitalId)),
            positive: CallTot(list.filter(ele => ele.type === 1 && ele.hospitalId === list[index].hospitalId)),
            unknown: CallTot(list.filter(ele => ele.type === 0 && ele.hospitalId === list[index].hospitalId))
        })
        }
    }
    return groundData
}

function CallTot(list){
    let total = 0
    
    list.map(ele => total += parseInt(ele?.count))
  
    return total
}
  

export async function PostRequestBabyInfo(data, uploadStatus, imageFile, message){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}

    const dataForm = DataFormConvert(data, uploadStatus)
   
    const response = await POSTCall('api/v1/vault/baby-info', dataForm, header)

    if(response?.code === 0){
        // console.log("PostRequest ", response)
        const babyId = response?.data?.id
        dataForm.id = babyId
        dataForm.testResult = data?.testResult == "TRT_UNKNOWN"? 0 :data?.testResult == "TRT_POSITIVE"? 1 : 2
        updateLocalData('babysList', dataForm)
        
        if(imageFile){
            const image64 = await getBase64(imageFile)
            const imageExt = imageFile?.type?.split('/')[1]

            const variables = {
                uploadType: "UT_PATIENT",
                base64: image64,
                extension: imageExt,
                uploaderId: babyId
            }
            const imageRes = await POSTCall('api/v1/vault/image', variables, header)
            if(imageRes?.code == 0){
                if(dataForm?.IsSmsSend){
                    const variables = {
                        phoneNumber: dataForm?.mobileNumber2? `${dataForm?.mobileNumber},${dataForm?.mobileNumber2}`: dataForm?.mobileNumber,
                        body: `${message} \nDownload Report: http://nbs-thalassemia.exhortbd.com/view?id=${babyId}&im=${imageRes?.data?.name}`
                    }
                    // console.log("sendSMS variables", variables)
                    const response = await POSTCall('api/v1/vault/sms/send', variables, header)
                    // console.log("sendSMS response", response)
                }
            }
            // console.log("imageres", imageRes)
        }
        return true
    }else{
        return false
    }
}

async function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = reject
    })
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
        // console.log("sendSMS response", response)
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

export function DataFormConvert(dataForm, uploadStatus){

    let newData = JSON.parse(JSON.stringify(dataForm))
    newData.babyType = checkValue(dataForm?.babyType)
    newData.deliveryProcess = checkValue(dataForm?.deliveryProcess)
    newData.babyDob = checkValue(dataForm?.babyDob)
    newData.sampleCollectDate = checkValue(dataForm?.sampleCollectDate)
    newData.bloodCollectAge = checkValue(dataForm?.bloodCollectAge)
    newData.hospitalId = checkValue(dataForm?.hospitalId)
    newData.nameOfInterviewer = checkValue(dataForm?.nameOfInterviewer)
    newData.babyMotherAge = checkValue(dataForm?.babyMotherAge)
    newData.motherAgeOfMarriage = checkValue(dataForm?.motherAgeOfMarriage)
    newData.babyFatherAge = checkValue(dataForm?.babyFatherAge)
    newData.babyMotherEduQualification = checkValue(dataForm?.babyMotherEduQualification)
    newData.babyFatherEduQualification = checkValue(dataForm?.babyFatherEduQualification)
    newData.babyMotherOccupation = checkValue(dataForm?.babyMotherOccupation)
    newData.babyFatherOccupation = checkValue(dataForm?.babyFatherOccupation)
    newData.familyMonthlyExpenses = checkValue(dataForm?.familyMonthlyExpenses)
    newData.totalFamilyMember = checkValue(dataForm?.totalFamilyMember)
    newData.previousAnyChildren = checkValue(dataForm?.previousAnyChildren)
    newData.previousChildrenAnemia = checkValue(dataForm?.previousChildrenAnemia)
    newData.ageDifference = checkValue(dataForm?.ageDifference)
    newData.antenatalHealthcare = checkValue(dataForm?.antenatalHealthcare)
    newData.ttVaccine = checkValue(dataForm?.ttVaccine)
    newData.knowAboutThalassemia = checkValue(dataForm?.knowAboutThalassemia)
    newData.babyMotherAnemia = checkValue(dataForm?.babyMotherAnemia)
    newData.babyFatherAnemia = checkValue(dataForm?.babyFatherAnemia)
    newData.parentsAreRelative = checkValue(dataForm?.parentsAreRelative)
    newData.beforeMarriageBloodTest = checkValue(dataForm?.beforeMarriageBloodTest)
    newData.UploadStatus = uploadStatus

    return newData
}

function checkValue(value){
    try {
        const val = parseInt(value)
        if(isNaN(val)) return -111
        else return parseInt(value)
    } catch (error) {
        console.log("checkValue error", error)
        return -111
    }
}

function updateLocalData(storeName, data){
    const list = Storage.getLocalStorageData(storeName)
    let newList = JSON.parse(JSON.stringify(list))
    if(data?.id){
        const index = list.findIndex(ele => ele?.id == data?.id)

        if(index > -1){
            newList[index] = data
        }else{
            newList.unshift(data)
        }
        Storage.setInLocalStorage(storeName, newList)
    }

}

export async function Report(){
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}

    const response = await GETCall("api/v1/vault/report", header)
    if(response?.code === 0){
       return response?.data
    }else{
        return false
    }
}

export async function GetImage(data) {
    const auth = Storage.getLocalStorageData('loginData')
    const header = { 'Authorization': auth?.accessToken}
    
    const response = await GETCall("api/v1/vault/images", header, data)
    if(response?.code === 0){
        return response?.data
    }else{
        return false
    }
}

export async function DownloadPatientReport(id, imageKey){
    try {
        const data = {
            patientId: id,
            images: imageKey
        }
        const response = await GETCall("api/v1/vault/patient/report", null, data)
        return response
        return {
            "code": 0,
            "data": {
              "urls": [
                "string"
              ],
              "name": "string",
              "type": 0,
              "motherName": "string",
              "dob": "string",
              "bloodCollectAge": 0,
              "sampleCollectDate": "string",
              "testResult": "nagative",
              "mobileNumber": "string",
              "mobileNumber2": "string"
            }
        }
    } catch (error) {
        return false
    }
}