import React from 'react';
import Card from '../components/dashboard/Card';
// import Card from '../components/dashboard/Card1';
import Navbar from '../components/homecomponents/Navbar';
import Navcontact from '../components/homecomponents/Navcontact';

import Footer from '../components/homecomponents/Footer'
import '../styles/dashboard.css';
function Dashboard(props) {
    return (
        <div>
            <Navcontact/>
            <Navbar/>
         <div className='dashboardMainDiv'>
           <Card name="disawar" />
           <Card name="faridabad" />
           <Card name="ghaziabad" />
           <Card name="ghazipur_bazar" />
           <Card name="gali" />

          
           </div>
           <Footer/>
        </div>
    );
}

export default Dashboard;