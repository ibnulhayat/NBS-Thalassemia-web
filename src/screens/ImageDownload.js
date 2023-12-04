import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { useRef, useState } from 'react';
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import * as Service from './../AllService'
import loaderImage from './../image/loading.gif'
import govt from './../image/govt.png'
import nilmrc from './../image/nilmrc.png'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from 'react-bootstrap';

export default function ImageDownload(){
    const pdfRef = useRef()
    const params = useSearchParams()
    const id = params[0].get('id')
    const image = params[0].get('im')    
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState('')

    // console.log("params", id, image)
    useEffect(()=>{
        Call()

    },[])

    const Call = async() =>{
       try {
        const response = await Service.DownloadPatientReport(id, image)
        console.log("response", response)
        if(response?.code == 0){
            setDetails(response?.data)
            await delay(1500)
            setLoading(false)
        }
       } catch (error) {
        console.log(error)
       }
       
    }

    const downloadPdf = () =>{
        const input = pdfRef.current
        html2canvas(input).then((canvas) => {
            const imageData = canvas.toDataURL('image.png')
            const pdf = new jsPDF('p', 'mm','a4',true)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width
            const imgHeight = canvas.height
            const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight)
            const imageX = (pdfWidth - imgWidth * ratio) / 2
            
            pdf.addImage(imageData, 'JPEG', imageX, 10, imgWidth * ratio, imgHeight * ratio)
            pdf.save("download.pdf");
        })

    }
    return (
        <>{
             
            loading ?
            <div className='modal-main'>
            {/* <img src={loader} alt="test" className='loader'/> */}
                <img src={loaderImage} alt="test" className='loader'/>
            </div>
            :
                <div className='col bg-white'>
                    
                    <div className='d-flex align-items-center justify-content-center border'>
                        <div className='m-3 ' style={{ width: 800}} ref={pdfRef}>
                            <div className='row m-5 mb-0 justify-content-between' >
                                <img src={govt} alt="test" className='pdf-logo' style={{width: 105}}/>
                                <img src={nilmrc} alt="test" className='pdf-logo'/>
                            </div>
                            <div className='m-3'>
                                <p className="addform-label text-success pdf-text" >Government of the People's Republic of Bangladesh</p>
                                <p className="addform-label text-danger pdf-text" >NATIONAL INSTITUTE OF LABORATORY MEDICINE & REFERRAL CENTRE</p>
                                <p className="addform-label text-danger pdf-text" >“Newborn Thalassemia Screening Project”</p>
                            </div>
                            <div className='row m-5' >
                                <table className='table table-borderless'>
                                    
                                    <tbody>
                                        <tr>
                                            <th>Patient Name</th>
                                            <th>:</th>
                                            <td>Baby of {details?.motherName}</td>
                                        </tr>
                                        <tr>
                                            <th>Mobile number</th>
                                            <th>:</th>
                                            <td>{details?.mobileNumber2? `${details?.mobileNumber}, ${details?.mobileNumber2}`: details?.mobileNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Age</th>
                                            <th>:</th>
                                            <td>{details?.bloodCollectAge} days</td>
                                        </tr>
                                        <tr>
                                            <th>Collection date</th>
                                            <th>:</th>
                                            <td>{formatDate(details?.sampleCollectDate)}</td>
                                        </tr>
                                        <tr>
                                            <th>Sample</th>
                                            <th>:</th>
                                            <td>DBS(Dry Blood Sample) from heel pad capillary blood.</td>
                                        </tr>
                                        <tr>
                                            <th>Method</th>
                                            <th>:</th>
                                            <td>Isoelectric focusing (IEF) electrophoresis.</td>
                                        </tr>
                                        <tr>
                                            <th>Result</th>
                                            <th>:</th>
                                            <td className={`fw-bold ${details?.testResult=='TRT_POSITIVE'?'text-danger':'text-success'}`}>{details?.testResult=='TRT_NEGATIVE'?'Negative': details?.testResult=='TRT_POSITIVE'?'Positive':''}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {
                                    details?.testResult == 'TRT_POSITIVE'?
                                        <table className='table table-borderless'>
                                            
                                            <tbody>
                                                <tr>
                                                    <th>Advice</th>
                                                    <th>:</th>
                                                    <td>1. Capillary Hb Electrophoresis after 1 year of age.<br/>2. Family screening.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Note</th>
                                                    <th>:</th>
                                                    <td>
                                                        Capillary electrophoresis of baby at the age of 1 year will be done for free from this project.<br/>Father’s and mother’s thalassemia screening will be done for free from this project.
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                
                    <div className='d-flex p-5 justify-content-center'>
                        <Button 
                            variant='primary'
                            className="button me-5 float-end"
                            onClick={() => downloadPdf()}
                        >Download</Button>
                    </div>
                </div>
        }</>
    )
}
function formatDate(timestamp) {
    const  date = new Date(parseInt(timestamp)* 1000)
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
}
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);