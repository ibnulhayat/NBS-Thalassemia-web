
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import AddBabyForm from './screens/baby/AddBabyForm';
import AddNewHospital from './screens/AddNewHosital';
import AddNewNurs from './screens/AddNewNurs';
import EditSMS from './screens/EditSMS';
import BabyInfo from './screens/baby';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/baby-info",
    element: <BabyInfo />,
  },
  {
    path: "/addbaby",
    element: <AddBabyForm />,
  },
  {
    path: "/edit-baby-info/:id",
    element: <AddBabyForm />,
  },
  {
    path: "/addhospital",
    element: <AddNewHospital />,
  },
  {
    path: "/addnurs",
    element: <AddNewNurs />,
  },
  {
    path: "/editsms",
    element: <EditSMS />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}  />
    </div>
  );
}

export default App;
