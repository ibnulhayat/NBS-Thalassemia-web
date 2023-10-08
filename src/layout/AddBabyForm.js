import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function AddBabyForm(){
    
    const formSubmit = async(e) => {
        e.preventDefault();
    };
  
    return(
        <div className="col m-3">
            <form id="addbabyform" onSubmit={formSubmit} >
                {/* First Row Start*/}
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select 
                                className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required>
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Second Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Third Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Fourth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Fiveth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Sixth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Seven Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Eight Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Nine Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Tenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Eleventh Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Twelvesth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Thirteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >Languages</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Sixteenth Row Start*/}
                <button type="submit" className="mt-5 mb-5">Submit</button>
            </form>
        </div>
    )
}