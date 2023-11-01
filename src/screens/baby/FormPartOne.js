import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Service from '../../AllService'
import BabyDataPreview from './BabyDataPreview';

export default function FormPartOne({dataId, dataForm, UpdateForm, callBack}){
    const navigate = useNavigate()
    const [disable, setDisable] = useState(false)
    const [show, setShow] = useState(false)

    const formSubmit = async(e) => {
        e.preventDefault();
        const buttonText = e?.nativeEvent?.submitter?.innerText
        if(buttonText == "Next"){
            if(dataForm?.mobileNumber?.length <= 10){
                alert("Please input 11 digit mobile number")
                return false
            }
            callBack('partTwo')
        }else{
            setShow(true)
        }
    }

    const ServerCall = async(data) =>{
        setShow(false)
        if(data === 'ok'){
            setDisable(true)
            if(dataId){
                dataForm.id = dataId
            }
            const response = await Service.PostRequestBabyInfo(dataForm, 'US_PENDING')
            if(response){
                navigate(-1)
            }
            setDisable(false)
        }
    }

    return(
        <div className="col m-3">
            <form id="addbabyform" onSubmit={formSubmit}>
                {/* First Row Start*/}
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১. আইডি নং</label>
                            <input
                                className="form-control" 
                                required
                                type='text'
                                placeholder='A45'
                                value={dataForm?.CustomId}
                                onChange={(event) => UpdateForm({CustomId: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২.প্রথম মোবাইল নাম্বারঃ</label>
                            <input 
                                className="form-control" 
                                required
                                type='number'
                                placeholder='019xx-xxxxxx'
                                value={dataForm?.mobileNumber}
                                onChange={(event) => {
                                    if(event.target.value.length <= 11){
                                        UpdateForm({mobileNumber: event.target.value})
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* Second Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩.দ্বিতীয় মোবাইল নাম্বারঃ</label>
                            <input 
                                className="form-control"  
                                type='number'
                                placeholder='019xx-xxxxxx'
                                value={dataForm?.mobileNumber2}
                                onChange={(event) => {
                                    if(event.target.value.length <= 11){
                                        UpdateForm({mobileNumber2: event.target.value})
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৪. শিশুর নাম?</label>
                            <input
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='শিশুর নাম'
                                value={dataForm?.babyName}
                                onChange={(event) => UpdateForm({babyName: event.target.value})}
                            />
                            
                        </div>
                    </div>
                </div>
                {/* Third Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৫. শিশুর লিঙ্গ কি?</label>
                            <select className="form-control" 
                                onChange={(event) => UpdateForm({babyType: event.target.value})}
                                value={dataForm?.babyType}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>ছেলে</option>
                                <option value='1'>মেয়ে</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৬. শিশুর মায়ের নাম কি?</label>
                            <input 
                                className="form-control" 
                                type='text'
                                required
                                placeholder='শিশুর মায়ের নাম'
                                value={dataForm?.babyMotherName}
                                onChange={(event) => UpdateForm({babyMotherName: event.target.value})}
                            />
                        </div>
                    </div>
                </div>

                {/* Fourth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৭. শিশুর জন্ম তারিখ?</label>
                            <input 
                                className="form-control" 
                                type='date'
                                placeholder='dd/mm/yyyy'
                                value={dataForm?.babyDOB}
                                onChange={(event) => {
                                    const dateTime = Math.floor(new Date(event.target.value).getTime()/ 1000)
                                    UpdateForm({
                                        babyDOB: event.target.value, 
                                        babyDob: dateTime || event.target.value,
                                        bloodCollectAge: event.target.value? ((dataForm.sampleCollectDate - dateTime) / 86400).toString(): event.target.value 
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৮. শিশুর কি ধরনের প্রসব হয়েছে?</label>
                            <select className="form-control" 
                                onChange={(event) => UpdateForm({deliveryProcess: event.target.value})}
                                value={dataForm?.deliveryProcess}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>নরমাল ডেলিভারি </option>
                                <option value='1'>সিজারিয়ান</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Fifth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৯. নমুনা সংগ্রহের তারিখ?</label>
                            <input 
                                className="form-control" 
                                type='date'
                                placeholder='dd/mm/yyyy'
                                value={dataForm.bloodCollectDate}
                                onChange={(event) => {
                                    const dateTime = new Date(event.target.value).getTime()
                                    UpdateForm({
                                        bloodCollectDate: event.target.value,
                                        sampleCollectDate: Math.floor(dateTime / 1000) || event.target.value,
                                        bloodCollectAge: setValue((Math.floor(dateTime / 1000) - dataForm?.babyDob) / 86400)
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label className="addform-label">১০. শিশুর বয়স?</label>
                            <input 
                                className="form-control" 
                                type='number'
                                min="0"
                                placeholder='only number (Ex: 10)'
                                value={dataForm?.bloodCollectAge}
                                onChange={(event) => UpdateForm({bloodCollectAge: setValue(event.target.value)}) }
                            />
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center mt-5 mb-5'>
                    {
                        !dataId?
                            <Button 
                                variant={disable? 'secondary':'success'} 
                                type="submit" 
                                className="button me-5 float-end"
                                disabled={disable}
                            >Save as draft</Button>
                        : null
                    }
                    <Button 
                        variant={disable? 'secondary':'primary'} 
                        className="button float-end"
                        disabled={disable}
                        type="submit" 
                    >Next </Button>
                </div>
            </form>
            <BabyDataPreview 
                show={show}
                callBack={ServerCall}
                dataForm={dataForm}
            />
        </div>
    )
}

function setValue(value){
    try {
        const val = parseInt(value)
        if(isNaN(val) || val < 0) return ''
        else return value.toString()
    } catch (error) {
        return ''
    }
}