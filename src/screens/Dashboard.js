import 'bootstrap/dist/css/bootstrap.min.css';
import * as Store from './../Storage'
import HospitalListTable from './HospitalListTable';
import React, { useEffect, useState } from 'react';
import * as Service from './../AllService'
import SummaryTable from './SummaryTable';
import InnerLayer from '../global/InnerLayer';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate()
  const [sumarryList, setSumarryList] = useState([])
  const [hospitalList, setHospitalList] = useState([])
  const [totalCase, setTotalCasse] = useState(0)
  const [disable, setDisable] = useState(false)
  
  useEffect(()=>{
    getCall()
  },[])
  
  const getCall = async() =>{

    const resData =  await Service.getDashBoardData()
    console.log("getDashBoardData ", resData)
    if(resData == 'Network Error'){
      alert('Please check your internet connection.')
      return null
    }else if(resData?.message === "access token not found"){
      Service.logOut()
      navigate('/')
    }else if(resData?.length > 0){
      await Service.getBabyList()
      const resh = await Service.getHospitalList()
      Service.getNursList()
      setSumarryList(resData)
      setHospitalList(resh)
      totalCount()
    }
  }


  const selectSearch = (itemId) =>{
    const list = Store.getLocalStorageData('summaries')
    if( itemId ){
      const newList = list.filter(ele => ele?.hospitalId === itemId)
      setSumarryList(newList)
    }else{
      setSumarryList(list ? list: [] )
      totalCount()
    }
  }

  const totalCount = () =>{
    let count = 0
    Store.getLocalStorageData('summaries').map(ele => count += (ele?.unknown + ele?.positive + ele?.negative))
    setTotalCasse(count)
  }

  const DownloadReport = async() => {
    setDisable(true)
    const response = await Service.Report()
    if(response){
      setDisable( false)
      window.open(response?.url, '_blank')
    }
  }


  return (
    <InnerLayer>
      <div className='col m-3'>
        <label className="addform-label mb-2">Summary</label>
        <div className='mt-2 mb-2'>
          <div className="row mt-3 mb-1">
            <div className="col-sm-6">
            <select 
              className="form-control"
              onChange={(event) => {
                selectSearch(event.target.value)
                  // UpdateForm({hospitalId: parseInt(event.target.value), nameOfInterviewer: -1})
              }}
            >
                <option value=''>Select Hospital Name</option>
            {
                hospitalList?.map( (item) => 
                    <option value={item?.id} key={item?.id}>{item?.name}</option>
                )
            }
            </select>
            </div>
            <div className="col-sm-3">
              <label className="addform-label">Total Case: {totalCase}</label>
            </div>
            <div className="col-sm-3">
              <Button 
                variant={disable? 'secondary':'primary'} 
                className="button float-end"
                disabled={disable}
                onClick={DownloadReport} 
              >View Excel File</Button>
            </div>
          </div>
            
          <SummaryTable rows={sumarryList == null?[]: sumarryList }/>
        </div>
        <label className="addform-label mt-5">Hospital List</label>
        <HospitalListTable rows={hospitalList == null? []: hospitalList}/>
      </div>
    </InnerLayer>
  )
}