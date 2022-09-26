import React from 'react';
import Liveresult from '../components/homecomponents/Liveresult';
import Tableresult from '../components/homecomponents/Tableresult';
import Footer from '../components/homecomponents/Footer';
import Navbar from '../components/homecomponents/Navbar';
import Navcontact from '../components/homecomponents/Navcontact';
import pdf from '../images/HINDI1024.jpg'
import pdf1 from '../images/LOGO-1.jpg'
import '../styles/home.css'
function Home(props) {
  return (
    <div>
      <Navcontact/>
      <Navbar/>
      <Liveresult />
      <div className='imageDiv' >
      <img src={pdf} className='notice'  />
      <img src={pdf1} className='logopdf'  />
      </div>
      
      <Tableresult />
      <Footer/>
    </div>
  );
}

export default Home;
