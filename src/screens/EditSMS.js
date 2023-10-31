import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Service from '../AllService'
import InnerLayer from '../global/InnerLayer';
import * as Store from '../Storage'

export default function EditSMS(){
    
    
    const smsObject = Store.getLocalStorageData('editsms')
    
    const [dataForm, setDataForm] = useState(smsObject)
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
        <InnerLayer>
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
            </div>
        </InnerLayer>
    )
}