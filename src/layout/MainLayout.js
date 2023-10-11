import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import AddBabyForm from './AddBabyForm';
import AddNewHospital from './AddNewHosital';
import AddNewNurs from './AddNewNurs';
import Dashboard from './Dashboard';
import * as Service from './../AllService'
import { useNavigate } from 'react-router-dom';

export default function MainLayout() {
  const navigate = useNavigate()
  const [selectTab, setSelectTab] = useState("Dashboard")
  const ClickOnTab = (type) => {
    setSelectTab(type)
    console.log('eeeee', type)
  }
  
  // useEffect(()=>{
  //   getCall()
  // },[])
  
  // const getCall = async() =>{
  //   await Service.getHospitalList()
  //   await Service.getNursList()
  //   await Service.getBabyList()
  // }
  const ClickLogout = () =>{
    Service.logOut()
    navigate('/')
  }

  return (
      <div>
        <div id="logo">
          <span className="big-logo">NBS Thalassemia</span>
        </div>
        <div id="left-menu">
          <div className='m-2'>
            <div 
              className={`left-menu-item ${selectTab === 'Dashboard'? 'active': ''}`}
              onClick={()=> ClickOnTab('Dashboard')}
            >
              <span >Dashboard</span>
            </div>
            <div className={`left-menu-item ${selectTab === 'Addbaby'? 'active': ''}`}
              onClick={()=> ClickOnTab('Addbaby')}
            >
              <span>Add New Baby Info</span>
            </div>
            
            <div className={`left-menu-item ${selectTab === 'AddHospital'? 'active': ''}`}
              onClick={()=> ClickOnTab('AddHospital')}>
              <span>Add New Hospital</span>
            </div>
            
            <div className={`left-menu-item ${selectTab === 'AddNurs'? 'active': ''}`}
              onClick={()=> ClickOnTab('AddNurs')}>
              <span>Add New Nurs Info</span>
            </div>

            <div className={`left-menu-item`}
              onClick={()=> ClickLogout()}>
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div id="main-content">
          <div id="header">
            {/* <div className="float-end logout">
              <span>Logout</span>
            </div> */}
          </div>
          <div id="page-container">
            <div className="card">
              {
                selectTab === 'Dashboard'?
                  <Dashboard />
                : selectTab === 'Addbaby'?
                  <AddBabyForm />
                : selectTab === 'AddHospital'?
                  <AddNewHospital />
                : selectTab === 'AddNurs'?
                  <AddNewNurs />
                :null 
              }
              
            </div>
          </div>
        </div>
      </div>
  );
}
