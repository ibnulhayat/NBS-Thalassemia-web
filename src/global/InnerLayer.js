import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import * as Service from '../AllService'
import { useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';


export default function InnerLayer({children}) {
  const navigate = useNavigate()
  const location = useLocation();
  const [selectTab, setSelectTab] = useState("")
  const [drawerOpen, setDrawerOpen] = useState(false)
 
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
        <div className={`left-menu ${drawerOpen ? "drawerOpen" : ""}`}>
          <div className='m-2'>
            <div 
              className={`left-menu-item ${selectTab === '/dashboard'? 'active': ''}`}
              onClick={()=> navigate('/dashboard')}
            >
              <span >Dashboard</span>
              {/* <Link to={"/dashboard"} /> */}
            </div>
            <div className={`left-menu-item ${selectTab.includes('baby-info')? 'active': ''}`}
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

            {/* <div className={`left-menu-item`}
              onClick={()=> ClickLogout()}>
              <span>Logout</span>
            </div> */}
          </div>
        </div>
        <div id="main-content">
          <div id="header">
            <div className="float-start toggol-icon">
              {
                drawerOpen?
                  <CloseIcon onClick={()=>setDrawerOpen(!drawerOpen)} fontSize="large" />
                : <MenuIcon onClick={()=>setDrawerOpen(!drawerOpen)} fontSize="large" />
              }
              
            </div>
            <div className="float-end logout" onClick={()=>ClickLogout()}>
              <LogoutIcon fontSize="large" />
              <span>Logout</span>
            </div>
          </div>
          <div id="page-container">
            <div className="card">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}
