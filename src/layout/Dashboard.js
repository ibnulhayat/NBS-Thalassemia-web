import 'bootstrap/dist/css/bootstrap.min.css';
import * as Store from './../Storage'
import DashboardTable from './DashboardTable';
import BabyInfoTable from './BabyInfoTable';
import HospitalListTable from './HospitalListTable';
import { useEffect, useState } from 'react';
import * as Service from './../AllService'
import SummaryTable from './SummaryTable';

export default function Dashboard() {

  const[sumarryList, setSumarryList] = useState([])
  const[babysList, setBabysList] = useState([])
  const[hospitalList, setHospitalList] = useState([])
  const [totalCase, setTotalCasse] = useState(0)

  useEffect(()=>{
    getCall()
  },[])
  
  const getCall = async() =>{
    const resData =  await Service.getDashBoardData()
    const resb =  await Service.getBabyList()
    const resh = await Service.getHospitalList()
    await Service.getNursList()
    setSumarryList(resData)
    setBabysList(resb)
    setHospitalList(resh)
    totalCount()
  }

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
  const selectSearch = (itemId) =>{
    const list = Store.getLocalStorageData('summaries')
    if( itemId ){
      let count = 0
      let newList = list.filter((ele) => {
        console.log("item ", ele)
        if(ele?.hospitalId == itemId){
          count += parseInt(ele?.count)
          return ele
        }
      })
      setSumarryList(newList)
      setTotalCasse(count)
    }else{
      setSumarryList(list ? list: [] )
      totalCount()
    }
  }

  const totalCount = () =>{
    let count = 0
    Store.getLocalStorageData('summaries').map(ele => count += parseInt(ele?.count))
    setTotalCasse(count)
  }


  console.log("sumarryList ", sumarryList)
  console.log("babysList ", babysList)

  return (
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
                  <option value={item?.id}>{item?.name}</option>
              )
          }
          </select>
          </div>
          <div className="col-sm-6">
            <label className="addform-label">Total Case: {totalCase}</label>
          </div>
        </div>
          
        <SummaryTable rows={sumarryList == null?[]: sumarryList }/>
      </div>
      <label className="addform-label mt-5 mb-1">Baby Info</label>
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
        
      <BabyInfoTable rows={babysList == null?[]: babysList }/>
      <label className="addform-label mt-5">Hospital List</label>
      <HospitalListTable rows={hospitalList == null? []: hospitalList}/>
    </div>
  )
}
