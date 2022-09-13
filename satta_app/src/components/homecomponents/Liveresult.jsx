import React, { useState, useEffect } from 'react';
import links from '../../links';
import '../../styles/liveresult.css';

function Liveresult(props) {
const [Data,setData]=useState()
  useEffect(()=>{
    getLiveData();
  },[])
  // console.log(links)
  const getLiveData = () => {
    let liveDate = new Date();
   
    let date = {
      day: new Date().getDate(),
      month: new Date().getUTCMonth()+1,
      year: new Date().getFullYear()
    }
    console.log('livedate',date)
    fetch(`${links.getLiveDataLink}`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          date: date,

        })
    }).then((response) => {
        return response.json()
      }).then(async (data) => {
        if(data.status===200){
          setData(data)
        }
        
        
      }).catch(err => {
        console.log(err)
      })
  }
  console.log('Data',Data)
  return (
    <div>
      {Data?
      <div className='mainLiveResult'>
      <div className='showResult'>

        <div className='resultIcon'> </div>
        <div className="resutresponsive">
          <div className="resultHeading">

            <div className="heading_result">
              {Data.data.data.disawar?
              <p> Disawar -: <span>{Data.data.data.disawar}</span></p>
              :
              <p> Disawar -: <span>XX</span></p>
              }

            </div>
            <div className="heading_result">
              {Data.data.data.faridabad?
              <p> Faridabad -: <span>{Data.data.data.faridabad}</span></p>
              :
              <p> Faridabad -: <span>XX</span></p>
              }
            </div>
          </div>

          <div className="resultHeading">
            <div className="heading_result">
              {Data.data.data.ghaziabad?
              <p> Ghaziabad -: <span>{Data.data.data.ghaziabad}</span></p>
              :
              <p> Ghaziabad -: <span>XX</span></p>
              }
            </div>
            <div className="heading_result">
              {Data.data.data.ghazipur_bazar?
              <p> Ghazipur_bazar -: <span>{Data.data.data.ghazipur_bazar}</span></p>
              :
              <p> Ghazipur_bazar -: <span>XX</span></p>
              }
            </div>
          </div>

          <div className="resultHeading">
            <div className="heading_result">
              {Data.data.data.gali?
              <p> Gali -: <span>{Data.data.data.gali}</span></p>
              :
              <p> Gali -: <span>XX</span></p>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
      :
      <div className='mainLiveResult'>
      <div className='showResult'>

        <div className='resultIcon'> </div>
        <div className="resutresponsive">
          <div className="resultHeading">

            <div className="heading_result">
              <p> Disawar -: <span>xx</span></p>

            </div>
            <div className="heading_result">
              <p> Faridabad -: <span>xx</span></p>

            </div>
          </div>

          <div className="resultHeading">
            <div className="heading_result">
              <p> Ghaziabad -: <span>xx</span></p>
              {/* */}
            </div>
            <div className="heading_result">
              <p> Ghazipur_bazar -: <span>xx</span></p>

            </div>
          </div>

          <div className="resultHeading">
            <div className="heading_result">
              <p> Gali -: <span>xx</span></p>

            </div>
          </div>
        </div>

      </div>
    </div>
    }
     
    </div>
  );
}

export default Liveresult;
