import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as Service from './../AllService'
import loader from './../image/loading.gif'

export default function ImageDownload(){
    const navigate = useNavigate()
    const params = useSearchParams()
    const id = params[0].get('id')
    const image = params[0].get('im')

    console.log("params", id, image)
    useEffect(()=>{
        Call()

    },[])

    const Call = async() =>{
        const response = await Service.DownloadPatientReport(id, image)
        console.log("response", response)
        if(response?.code == 0){
            navigate(-1)
            window.open(response?.data?.urls?.[0],'_blank')
        }
       
    }
    return (
        <div className='modal-main'>
            <img src={loader} alt="test" className='loader'/>
        </div>
    )
}