
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './layout/Login';
import MainLayout from './layout/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
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
