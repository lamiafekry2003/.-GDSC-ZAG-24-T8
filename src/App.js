
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import { useState } from 'react';
import UserContext from './UserContext';

function App() {
  const [showHome,setShowHome] = useState(null);

  // const login = (userData) => {
  //   setUser(userData);
  // };

  // const logout = () => {
  //   setUser(null);
  // };
  const routs=createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {path:'',element:<Home></Home>},
      // {path:'register',element:<Register></Register>},
      {path:'login',element:<Login></Login>},
    ]}
  ])
  return (
    // <UserContext>
      <RouterProvider router={routs}/>
    // </UserContext>
  );
}

export default App;
