import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Service from '../AllService'
import InnerLayer from '../global/InnerLayer';
import * as Store from '../Storage'

export default function EditSMS(){
    const navigate = useNavigate()    
    
    const smsObject = Store.getLocalStorageData('editsms')
        
    useEffect(()=>{
        if(!smsObject){
            navigate('/dashboard')
        }
    },[])
    const [posiData, setPosiData] = useState(smsObject?.filter(ele => ele?.type == 1)?.[0] || {})
    const [negaData, setNwgaData] = useState(smsObject?.filter(ele => ele?.type == 2)?.[0] || {})
    const [showPos, setShowPos] = useState(true)
    const [showNeg, setShowNeg] = useState(true)


    const savePositive = async(e) => {
        e.preventDefault();
        await Service.UpdateSMS(posiData)
        setShowPos(!showPos)
    }
    const saveNagative = async(e) => {
        e.preventDefault();
        await Service.UpdateSMS(negaData)
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
                                value={posiData?.body}
                                onChange={(event) => setPosiData({...posiData, ...{body: event.target.value}})}
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
                                value={negaData?.body}
                                onChange={(event) => setNwgaData({...negaData, ...{body: event.target.value}})}
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