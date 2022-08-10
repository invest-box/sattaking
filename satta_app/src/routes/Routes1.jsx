import React, { useState, useEffect , Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from '../images/jelly-fluid-loader.gif'
import links from '../links';
const Home = React.lazy(() => import("../pages/Home"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Login = React.lazy(() => import("../pages/Login"));
const Pagenotfound = React.lazy(() => import("../pages/Pagenotfound"));

function Routes1(props) {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    userAuthenticate();
  });
  const userAuthenticate = async () => {
    var token = window.localStorage.getItem('token');

    await fetch(links.userdataLink, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.status);

        if (data.status === 200) {
          setAuthenticate(true);
        } else {
          setAuthenticate(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
    <Suspense fallback={<div style={{height:'800px',width:'100%',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}><img src={Loader} height='100' width='100'  alt=''/></div>}>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path="dashboard" element={authenticate?<Dashboard />:<Login/>} />

        <Route path='/*' element={<Pagenotfound />} />
        
      </Routes>
      </Suspense>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Routes1;
