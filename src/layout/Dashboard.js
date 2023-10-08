import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
import AddBabyForm from './AddBabyForm';
// import './../App.css';

export default function Dashboard() {
    


    return (
        <div>
          <div id="logo">
            <span className="big-logo">NBS Thalassemia</span>
          </div>
          <div id="left-menu">
            
            <ul>
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
              
            </ul>
            {/* <Button 
                variant="secondary" 
                onClick={}
            > Add New Baby </Button> */}
          </div>
          <div id="main-content">
            <div id="header">
              <div className="header-right float-end">
                <div className="logout">Logout</div>
              </div>
            </div>
            <div id="page-container">
              <div className="card">
                <AddBabyForm />
              </div>
            </div>
          </div>
        </div>
    );
}
