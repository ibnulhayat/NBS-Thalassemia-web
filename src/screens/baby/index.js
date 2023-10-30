import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import * as Store from './../../Storage'
import * as Service from './../../AllService'
import InnerLayer from '../../global/InnerLayer';
import { useEffect } from 'react';
import BabyInfoTable from './BabyInfoTable';
import { useNavigate } from 'react-router-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export default function BabyInfo(){
    const navigate = useNavigate()
    const[babysList, setBabysList] = useState([])
    const [show, setShow] = useState(false)
    const [imageUrl, setImageUrl] = useState(false)

    useEffect(()=>{
        const list = Store.getLocalStorageData('babysList')
        if(list){
            setBabysList(list)
        }
        // if(babysList?.length == 0){
        //     getList()
        // }
        
    },[])

    const getList = async() =>{
        const response =  await Service.getBabyList()
        setBabysList(response)
    }

    console.log("babysList ", babysList)
    const inputSearch = (input) => {
        const list = Store.getLocalStorageData('babysList')
        if(input && list){
          let newList = list.filter((item) => {
            if(item?.id == input || item?.mobileNumber.indexOf(input) > -1) return item
          })
          setBabysList(newList)
        }else{
          setBabysList(list ? list: [] )
        }
    }

    const onClick = async(type, id) =>{
        if(type == 'image'){
            // setShow(true)
            const response = await Service.GetImage({uploadType: "UT_PATIENT", uploaderId: id})
            console.log("res ", response)
            if(response?.urls?.length > 0){
                setImageUrl(response?.urls[0])
                setShow(true)
            }else{
                alert('No image found.')
            }
        }else{
            navigate('/edit-baby-info/'+id)
        }
        

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <InnerLayer>
            <div className='col m-3'>
               <div className='row'>
                    <div className="col-sm-6">
                        <label className="addform-label">Baby Info</label>
                    </div>
                    <div className="col-sm-6">
                        <Button 
                            variant='primary' 
                            className="button float-end"
                            onClick={() => navigate("/addbaby")}
                        >Add New Baby
                        </Button>
                    </div>
               </div>
                {
                    babysList?
                        <div className="row mt-3 mb-1">
                            <div className="col-sm-6">
                                <div className="form-group ">
                                    <input 
                                    className="form-control" required 
                                    type='text'
                                    placeholder='Search by ID or Mobile Number'
                                    onChange={(event) => inputSearch(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    : null
                }
                
                <BabyInfoTable rows={babysList == null?[]: babysList } callBack={onClick}/>
            </div>
            <Modal show={show} onHide={handleClose} size="lg">
                <div className='modal-main'>
                    <TransformWrapper>
                        <TransformComponent>
                            <img src={imageUrl} alt="test" className='image-style'/>
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </Modal>
        </InnerLayer>
    )
}