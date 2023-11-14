import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Service from '../../AllService'
import * as Storage from '../../Storage'
import BabyDataPreview from './BabyDataPreview';

export default function FormPartThree({dataId, dataForm, UpdateForm, callBack}){
    const navigate = useNavigate()  
    const [selectedImage, setSelectedImage] = useState(null)  
    const [disable, setDisable] = useState(false)
    const [message, setMessage] = useState('')
    const storeMessage = Storage.getLocalStorageData('editsms')
    const [show, setShow] = useState(false)

    useEffect(()=>{
        if(dataForm?.IsSmsSend){
            handleCheckClick(true)
        }
    },[])

    const handleCheckClick = (value) =>{
        UpdateForm({IsSmsSend: value})
        if(value){
            const mess = dataForm?.testResult === "TRT_POSITIVE"? `${dataForm?.babyMotherName} ${storeMessage?.positiveMessage}`
            : `${dataForm?.babyMotherName} ${storeMessage?.negativeMessage}`
            setMessage(mess)
        }else setMessage('')
    }

    const formThreeSubmit = async(e) => {
        e.preventDefault();
        const buttonText = e?.nativeEvent?.submitter?.innerText

        if(buttonText == "Submit"){
            setShow(true)
        }else{
            callBack('partTwo')
        }
    }

    const ServerCall = async(data) =>{
        setShow(false)
        if(data === 'ok'){
            setDisable(true)

            if(dataId){
                dataForm.id = dataId
            }
            const response = await Service.PostRequestBabyInfo(dataForm, 'US_COMPLETED',selectedImage, message)
            if(response){
                navigate(-1)
            }
            setDisable(false)
        }
    }



    return(
        <div className="col m-3">
            <form id="addbabyform" onSubmit={formThreeSubmit}>
                
                {/* Eleventh Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৫. শিশুর পূর্ববর্তী কোন সন্তান আছে কি?</label>
                            <select 
                                className="form-control" 
                                required 
                                value={dataForm?.previousAnyChildren}
                                onChange={(event) => UpdateForm({
                                    previousAnyChildren: event.target.value,
                                    ageDifference: '',
                                    previousChildrenAnemia: '',
                                })}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                            <div className="form-group">
                                <label className="addform-label">২৬. আপনার এই শিশুর বড় ভাই/বোনের সাথে বয়সের পার্থক্য কত বছর?</label>
                                <input 
                                    className="form-control" 
                                    required={dataForm.previousAnyChildren === '0'}
                                    disabled={!(dataForm.previousAnyChildren === '0')}
                                    type='number'
                                    min='0'
                                    autoComplete='on'
                                    placeholder='উদাহরনঃ- ০.৫/২/৫'
                                    value={dataForm?.ageDifference}
                                    onChange={(event) => UpdateForm({ageDifference: setValue(event.target.value)})}
                                />
                            </div>
                        </div>
                </div>
                {/* Twelvesth Row Start*/}
    
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৭. আপনার এই শিশুর বড় ভাই/বোনের রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control"
                                required={dataForm.previousAnyChildren === '0'}
                                disabled={!(dataForm.previousAnyChildren === '0')} 
                                onChange={(event) => UpdateForm({previousChildrenAnemia: event.target.value})}
                                value={dataForm?.previousChildrenAnemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>জানা নেই </option>
                                <option value='2'>না</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">২৮. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে কোন ধরনের রক্তের পরীক্ষা করা হয়েছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({beforeMarriageBloodTest: event.target.value})}
                                value={dataForm?.beforeMarriageBloodTest}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                {/* Thirteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৯. শিশুর মা শিশু গর্ভ অবস্থায় থাকাকালে কি গর্ভকালীন স্বাস্থ্য সেবা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({antenatalHealthcare: event.target.value})}
                                value={dataForm?.antenatalHealthcare}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">৩০. শিশুর মা কি টিটি টিকা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({ttVaccine: event.target.value})}
                                value={dataForm?.ttVaccine}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Fifteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩১. শিশুর মায়ের দিকের আত্মীয়দের মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyMotherAnemia: event.target.value})}
                                value={dataForm?.babyMotherAnemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>জানা নেই </option>
                                <option value='2'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">৩২. শিশুর বাবা অথবা বাবার দিকে আত্মীয়র মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এ ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyFatherAnemia: event.target.value})}
                                value={dataForm?.babyFatherAnemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>জানা নেই </option>
                                <option value='2'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Sixteenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৩. কার ছিল?</label>
                            <input 
                                className="form-control" 
                                required={(dataForm.babyMotherAnemia === '0' || dataForm.babyFatherAnemia === '0')}
                                disabled={!(dataForm.babyMotherAnemia === '0' || dataForm.babyFatherAnemia === '0')}
                                type='text'
                                autoComplete='on'
                                placeholder='কার আত্মীয়র সমস্যা ছিল'
                                value={dataForm?.whichPerson}
                                onChange={(event) => UpdateForm({whichPerson: event.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">৩৪. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে আত্মীয়তা ছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({parentsAreRelative: event.target.value})}
                                value={ dataForm?.parentsAreRelative}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                {/* Seventeenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৫. কি ধরনের আত্মীয়তা ছিল?</label>
                            <input 
                                className="form-control" 
                                required={dataForm.parentsAreRelative === '1'}
                                disabled={dataForm.parentsAreRelative !== '1'} 
                                type='text'
                                autoComplete='on'
                                placeholder='কেমন আত্মীয় ছিল'
                                value={dataForm?.parentsRelativeType}
                                onChange={(event) => UpdateForm({parentsRelativeType: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">৩৬. আপনি কি কখনো থালাসেমিয়া রোগের নাম শুনেছন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({knowAboutThalassemia: event.target.value})}
                                value={dataForm?.knowAboutThalassemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                {/* Fourteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৭. নমুনা/রক্ত পরীক্ষার ফলাফল কি?</label>
                            <select 
                                className="form-control"
                                value={dataForm?.testResult}
                                onChange={(event) => {
                                    UpdateForm({testResult: event.target.value, IsSmsSend: false})
                                    setMessage('')
                                }}
                            >
                                <option value='TRT_UNKNOWN'>নির্বাচন করুন</option>
                                <option value='TRT_POSITIVE'>পজেটিভ</option>
                                <option value='TRT_NEGATIVE'>নেগেটিভ</option>
                            
                            </select>
                        </div>
                        {
                            dataForm?.testResult !== 'TRT_UNKNOWN'?
                                <>
                                    <div className="form-group mt-3">
                                        <label className="addform-label">নমুনা/রক্ত পরীক্ষার ফলাফল রিপোর্ট আপলোড করুন</label>
                                        <input
                                            type="file"
                                            accept="image/*" 
                                            onChange={async(event) => {
                                                // console.log(event.target.files[0],await getBase64(event.target.files[0]))
                                                setSelectedImage(event.target.files[0])
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mt-4 d-flex">
                                        <label className="addform-label">আপনি কি SMS পাঠাতে চান?</label>
                                        <div className='ms-3'>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" checked={dataForm?.IsSmsSend} onChange={()=>handleCheckClick(true)}/>
                                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" checked={!dataForm?.IsSmsSend} onChange={()=>handleCheckClick(false)}/>
                                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            : null
                        }
                    </div>

                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">৩৮. ডক্টর নোট </label>
                            <textarea 
                                className="form-control" 
                                type='text'
                                autoComplete='on'
                                placeholder='Write something....'
                                value={dataForm?.Note}
                                rows="5"
                                onChange={(event) => UpdateForm({Note: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {
                    dataForm?.IsSmsSend && dataForm?.testResult !== 'TRT_UNKNOWN'?
                        <div className="row mt-3">
                            <div className="form-group">
                                {/* <label className="addform-label"></label> */}
                                <textarea 
                                    className="form-control" 
                                    type='text'
                                    placeholder='Write something....'
                                    value={message}
                                    rows="4"
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </div>
                        </div>
                    : null
                }

                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <Button 
                        variant={disable? 'secondary':'primary'}
                        disabled={disable}
                        onClick={()=>callBack('partTwo')}
                        className="button me-5 float-end"
                        
                    >Previous</Button>
                    
                    <Button 
                        variant={disable? 'secondary':'success'} 
                        className="button float-end"
                        disabled={disable}
                        type="submit" 
                    >Submit </Button>
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
        else return value
    } catch (error) {
        return ''
    }
}