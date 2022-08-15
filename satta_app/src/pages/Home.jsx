import React from 'react';
import Liveresult from '../components/homecomponents/Liveresult';
import Tableresult from '../components/homecomponents/Tableresult';
import Footer from '../components/homecomponents/Footer';
import Navbar from '../components/homecomponents/Navbar';
import Navcontact from '../components/homecomponents/Navcontact';
function Home(props) {

  var myDate = "2020-05-26";
var timestamp = +new Date(myDate);
console.log(typeof(timestamp))
var date = new Date(timestamp);
console.log(date)
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
