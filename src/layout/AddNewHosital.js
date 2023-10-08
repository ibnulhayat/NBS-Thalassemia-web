import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function AddNewHospital(){
    
    const formSubmit = async(e) => {
        e.preventDefault();
    };
  
    return(
        <div className="col m-3">
            <form id="addnewhospital" onSubmit={formSubmit} >
                {/* First Row Start*/}
                <div className="row mt-3">
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label className="addform-label">হাসপাতালের নামঃ</label>
                            <input 
                                className="form-control" required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label className="addform-label">ঠিকানাঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                rows="5"
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                
                <div className='d-flex justify-content-center'>
                    <Button variant='primary' type="submit" className="button mt-5 mb-5 float-end">Submit</Button>
                </div>
            </form>
        </div>
    )
}