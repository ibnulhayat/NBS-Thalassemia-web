import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Service from '../AllService'
import * as Store from '../Storage'

export default function EditSMS(){
    const model = {
        positiveMessage: 'আপনার বাচ্চার পা থেকে রক্ত নিয়ে IEF পদ্ধতিতে থ্যালাসেমিয়া পরীক্ষার রেজাল্ট পজেটিভ হয়েছে ।নবজাতক থ্যালাসেমিয়া স্ক্রীনিং প্রকল্প, ন্যাশনাল ইনস্টিটিউট অব ল্যাবরেটরি মেডিসিন অ্যান্ড রেফারেল সেন্টার, ঢাকা। আপনাকে বাচ্চার বাবা সহ ন্যাশনাল ইনস্টিটিউট অব ল্যাবরেটরি মেডিসিন অ্যান্ড রেফারেল সেন্টারে আসার জন্য আনুরধ করা হচ্ছে।',
        negativeMessage: 'আপনার বাচ্চার পা থেকে রক্ত নিয়ে IEF পদ্ধতিতে থ্যালাসেমিয়া পরীক্ষার রেজাল্ট নেগেটিভ হয়েছে ।নবজাতক থ্যালাসেমিয়া স্ক্রীনিং প্রকল্প, ন্যাশনাল ইনস্টিটিউট অব ল্যাবরেটরি মেডিসিন অ্যান্ড রেফারেল সেন্টার, ঢাকা।'
    }
    const smsObject = Store.getLocalStorageData('editsms')
    console.log("smsObject ", smsObject)
    const [dataForm, setDataForm] = useState(smsObject?.positiveMessage? smsObject: model)
    const [showPos, setShowPos] = useState(true)
    const [showNeg, setShowNeg] = useState(true)

    const UpdateForm = (data) =>{
        setDataForm({...dataForm, ...data})
    }
    
    const savePositive = async(e) => {
        e.preventDefault();
        Store.setInLocalStorage('editsms', dataForm)
        setShowPos(!showPos)
    }
    const saveNagative = async(e) => {
        e.preventDefault();
        Store.setInLocalStorage('editsms', dataForm)
        setShowNeg(!showNeg)
    }
  
    return(
        <div className="col m-3">
            <div className="row mt-3">
                <div className='col-sm-6'>
                    <div className="form-group">
                        <label className="addform-label">পজেটিভ </label>
                        <textarea 
                            className="form-control" 
                            required 
                            type='text'
                            disabled={showPos}
                            rows="6"
                            value={dataForm.positiveMessage}
                            onChange={(event) => UpdateForm({positiveMessage: event.target.value})}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>{
                        showPos?
                            <Button 
                                variant='primary' 
                                onClick={()=>setShowPos(!showPos)} 
                                className="button mt-3 mb-5 float-end">Edit
                            </Button>
                        :<Button 
                            variant='primary' 
                            onClick={savePositive}
                            className="button mt-3 mb-5 float-end">Save
                        </Button>
                    }</div>
                </div>
                <div className='col-sm-6'>
                    <div className="form-group">
                        <label className="addform-label">নেগেটিভ </label>
                        <textarea 
                            className="form-control" 
                            required 
                            type='text'
                            rows="6"
                            disabled={showNeg}
                            value={dataForm.negativeMessage}
                            onChange={(event) => UpdateForm({negativeMessage: event.target.value})}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>{
                        showNeg?
                        <Button variant='primary' onClick={()=>setShowNeg(!showNeg)} className="button mt-3 mb-5 float-end">Edit</Button>
                        :<Button variant='primary' onClick={saveNagative} className="button mt-3 mb-5 float-end">Save</Button>
                    }</div>
                </div>
            </div>
            {/* <form id="addnewhospital" onSubmit={formSubmit} >
               
                <div className="row mt-3">
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label className="addform-label">পজেটিভ </label>
                            <textarea 
                                className="form-control" required 
                                type='text'
                                rows="6"
                                value={dataForm.positiveMessage}
                                onChange={(event) => UpdateForm({positiveMessage: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label className="addform-label">নেগেটিভ </label>
                            <textarea 
                                className="form-control" 
                                required 
                                type='text'
                                rows="6"
                                value={dataForm.negativeMessage}
                                onChange={(event) => UpdateForm({negativeMessage: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
            </form> */}
        </div>
    )
}