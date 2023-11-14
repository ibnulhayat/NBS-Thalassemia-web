import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import InnerLayer from '../global/InnerLayer';
import * as Service from './../AllService'
import * as Store from './../Storage'

export default function AddNewNurs(){

    const [dataForm, setDataForm] = useState({
        name: '',
        designation: '',
        hospitalId: ''
    })
    const hospitalList = Store.getLocalStorageData('hospitalList')

    const UpdateForm = (data) =>{
        setDataForm({...dataForm, ...data})
    }
    
    const formSubmit = async(e) => {
        e.preventDefault();
        const response =  await Service.PostRequest(dataForm)
        if(response){
            UpdateForm({name: "", designation: "", hospitalId: ''})
        }
    }
  
    return(
        <InnerLayer>
        <div className="col m-3">
            <form id="addnewhospital" onSubmit={formSubmit} >
                {/* First Row Start*/}
                <div className="row mt-3">
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label className="addform-label">নার্সের নামঃ</label>
                            <input 
                                className="form-control" required 
                                type='text'
                                value={dataForm.name}
                                onChange={(event) => UpdateForm({name: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className='col-sm-6 mar-top'>
                        <div className="form-group">
                            <label className="addform-label">পদবীঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                autoComplete='on'
                                
                                value={dataForm.designation}
                                onChange={(event) => UpdateForm({designation: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className='col-md-6 col-sm-6 mar-top'>
                        <div className="form-group">
                            <label className="addform-label">হাসপাতালের নামঃ</label>
                            <select 
                                className="form-control"
                                required
                                value={dataForm.hospitalId}
                                onChange={(event) => UpdateForm({hospitalId: event.target.value})}
                            >
                                <option value=''>নির্বাচন করুন</option>
                            {
                                hospitalList.map( (item) => 
                                    <option value={item?.id}>{item?.name}</option>
                                )
                            }
                            </select>
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