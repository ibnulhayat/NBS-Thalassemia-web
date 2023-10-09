import 'bootstrap/dist/css/bootstrap.min.css';
import AddBabyForm from './AddBabyForm';
import AddNewHospital from './AddNewHosital';
import Dashboard from './Dashboard';

export default function MainLayout() {
    


    return (
        <div>
          <div id="logo">
            <span className="big-logo">NBS Thalassemia</span>
          </div>
          <div id="left-menu">
            <div className='m-2'>
              <div className='left-menu-item active'>
                <span >Dashboard</span>
              </div>
              <div className='left-menu-item'>
                <span>Add New Baby Info</span>
              </div>
              
              <div className='left-menu-item'>
                <span>Add New Hospital</span>
              </div>
              
              <div className='left-menu-item'>
                <span>Add New Nurs Info</span>
              </div>
            </div>
            {/* <ul>
              <li className="active"><a href="#">
                  <i className="ion-ios-person-outline" />
                  <span>Dashboard</span>
                </a></li>
              <li className="has-sub">
                <a href="#">
                  <i className="ion-ios-person-outline" />
                  <span>Add New Baby</span>
                </a>
              </li>
              
            </ul> */}
            {/* <Button 
                variant="secondary" 
                onClick={}
            > Add New Baby </Button> */}
          </div>
          <div id="main-content">
            <div id="header">
              {/* <div className="float-end logout">
                <span>Logout</span>
              </div> */}
            </div>
            <div id="page-container">
              <div className="card">
                <Dashboard />
                {/* <AddBabyForm /> */}
                {/* <AddNewHospital /> */}
              </div>
            </div>
          </div>
        </div>
    );
}
