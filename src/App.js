
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './layout/Login';
import Dashboard from './layout/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  // {
  //   path: "/addnewbaby",
  //   element: <Categories />,
  // },
  // {
  //   path: "/users",
  //   element: <Users />,
  // },
  // {
  //   path: "/category-services/:catId",
  //   element: <CategoryServices />,
  // },
  // {
  //   path: "/service-packages/:serviceId",
  //   element: <ServicePackages />,
  // },
  // {
  //   path: "/service-orders",
  //   element: <ServiceOrders />,
  // },
  // {
  //   path: "/settings",
  //   element: <Settings />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}  />
    </div>
  );
}

export default App;
