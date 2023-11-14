import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import * as Service from './../AllService'
import loader from './../image/loading.gif'

export default function ImageDownload(){
    const params = useSearchParams()
    const id = params[0].get('id')
    const image = params[0].get('im')    
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('')

    // console.log("params", id, image)
    useEffect(()=>{
        Call()

    },[])

    const Call = async() =>{
       try {
        const response = await Service.DownloadPatientReport(id, image)
        // console.log("response", response)
        if(response?.code == 0){
            setUrl(response?.data?.urls?.[0])
            setLoading(false)
            // navigate(-1)
            // window.open(response?.data?.urls?.[0],'_blank')
        }
       } catch (error) {
        console.log(error)
       }
       
    }
    return (
        <div className='modal-main'>
            {   
                loading?<img src={loader} alt="test" className='loader'/>
                : <img src={url} alt="test" />
            }
        </div>
    )
}