import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import InnerLayer from '../global/InnerLayer';
import * as Service from './../AllService'

export default function AddNewHospital(){
    const [dataForm, setDataForm] = useState({
        name: '',
        address: ''
    })

    const UpdateForm = (data) =>{
        setDataForm({...dataForm, ...data})
    }
    
    const hospitaFormSubmit = async(e) => {
        e.preventDefault();
        const response =  await Service.PostRequest(dataForm)
        if(response){
            UpdateForm({name: "", address: ""})
        }
        console.log(dataForm)
    }
  
    return(
        <InnerLayer>
            <div className="col m-3">
                <form id="addnewhospital" onSubmit={hospitaFormSubmit} >
                    {/* First Row Start*/}
                    <div className="row mt-3">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <label className="addform-label">হাসপাতালের নামঃ</label>
                                <input 
                                    className="form-control" required 
                                    type='text'
                                    value={dataForm.name}
                                    onChange={(event) => UpdateForm({name: event.target.value})}
                                />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <label className="addform-label">ঠিকানাঃ</label>
                                <textarea 
                                    className="form-control" 
                                    required 
                                    type='text'
                                    rows="4"
                                    multiple={true}
                                    value={dataForm.address}
                                    onChange={(event) =>  UpdateForm({address: event.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-center'>
                        <Button variant='primary' type="submit" className="button mt-5 mb-5 float-end">Submit</Button>
                    </div>
                </form>
            </div>
        </InnerLayer>
    )
}