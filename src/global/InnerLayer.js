import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import * as Service from '../AllService'
import { useLocation, useNavigate } from 'react-router-dom';

export default function InnerLayer({children}) {
  const navigate = useNavigate()
  const [selectTab, setSelectTab] = useState("")
  const location = useLocation();
 
  console.log("location ",location.pathname)

  useEffect(()=>{
    setSelectTab(location.pathname)
  },[])
  
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
              className={`left-menu-item ${selectTab === '/dashboard'? 'active': ''}`}
              onClick={()=> navigate('/dashboard')}
            >
              <span >Dashboard</span>
              {/* <Link to={"/dashboard"} /> */}
            </div>
            <div className={`left-menu-item ${selectTab === '/baby-info'? 'active': ''}`}
              onClick={()=> navigate('/baby-info')}
            >
              <span>Baby Info</span>
              {/* <Link to={"/Addbaby"} /> */}
            </div>
            
            <div className={`left-menu-item ${selectTab === '/addhospital'? 'active': ''}`}
              onClick={()=> navigate('/addhospital')}>
              <span>Add New Hospital</span>
              {/* <Link to={"/AddHospital"} /> */}
            </div>
            
            <div className={`left-menu-item ${selectTab === '/addnurs'? 'active': ''}`}
              onClick={()=> navigate('/addnurs')}>
              <span>Add New Nurs Info</span>
            </div>
            
            <div className={`left-menu-item ${selectTab === '/editsms'? 'active': ''}`}
              onClick={()=> navigate('/editsms')}>
              <span>Edit SMS</span>
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
              {children}
              {/* {
                selectTab === 'Dashboard'?
                  <Dashboard />
                : selectTab === 'Addbaby'?
                  <AddBabyForm />
                : selectTab === 'AddHospital'?
                  <AddNewHospital />
                : selectTab === 'AddNurs'?
                  <AddNewNurs />
                : selectTab === 'editsms'?
                  <EditSMS />
                :null 
              } */}
              
            </div>
          </div>
        </div>
      </div>
  );
}
