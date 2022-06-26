import React from 'react';
import Liveresult from '../components/homecomponents/Liveresult';
import Tableresult from '../components/homecomponents/Tableresult';
import Footer from '../components/homecomponents/Footer';
import Navbar from '../components/homecomponents/Navbar';
import Navcontact from '../components/homecomponents/Navcontact';
function Home(props) {
  window.localStorage.setItem('name', 'sourbh');
  return (
    <div>
      <Navcontact/>
      <Navbar/>
      <Liveresult />
      <Tableresult />
      <Footer/>
    </div>
  );
}

export default Home;
