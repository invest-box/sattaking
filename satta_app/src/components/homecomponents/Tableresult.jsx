import React, { useState, useEffect } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import links from '../../links';

import Loader from '../../images/jelly-fluid-loader.gif';
import '../../styles/table.css';
function Tableresult(props) {
  const [data, setData] = useState();
  const [width, setwidth] = useState('');
  const [avail_width, setavail_width] = useState('');

  useEffect(() => {
    getData();
  
  }, []);
  useEffect(() => {
   
    tableWidth()
  });
  
  
  const tableWidth=()=>{
    setavail_width(window.innerWidth)
   console.log(window.innerWidth)
  if(window.innerWidth<=575){
    setwidth(100)
  }else if(window.innerWidth>575 && window.innerWidth<768){
    setwidth(110)
  }else if(window.innerWidth>769 && window.innerWidth<991){
    setwidth(130)
  }else if(window.innerWidth>992 && window.innerWidth<1120){
    setwidth(150)
  }else{
    setwidth('')
  }
  }

  const getData = async () => {
    await fetch(links.mainDataLink)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='table_div'>
      {data ? (
        <>
        
          <div
            className='ag-theme-alpine'
            style={{  width: '100%', zIndex: 0 }}
          >
            <AgGridReact rowData={data} domLayout='autoHeight'
            overlayLoadingTemplate={
              '<span className="ag-overlay-loading-center">Please wait while your rows are loading...</span>'
            }
            >
              <AgGridColumn
                headerName='Date'
                width={width}               
                cellRenderer={(data) => {
                  // console.log(data.data.date);

                  return <>{data.data.date}</>;
                }}
              />
              <AgGridColumn
                headerName='disawar'
                width={width}
                headerClass="disawar_header"
                cellStyle={{width:"100px"}}
                cellRenderer={(data) => {
                  // console.log(data.data.data.disawar);

                  return < >{data.data.data.disawar}</>;
                }}
              />
              <AgGridColumn
                headerName='faridabad'
                width={width}

                cellRenderer={(data) => {
                  // console.log(data.data.data.faridabad);

                  return <>{data.data.data.faridabad}</>;
                }}
              />
              <AgGridColumn
                headerName='ghaziabad'
                width={width}
                cellRenderer={(data) => {
                  // console.log(data.data.data);

                  return <>{data.data.data.ghaziabad}</>;
                }}
              />
              <AgGridColumn
                headerName='ghazipur_bazar'
                width={width}
                cellRenderer={(data) => {
                  // console.log(data.data.data.ghazipur_bazar);

                  return <>{data.data.data.ghazipur_bazar}</>;
                }}
              />
              <AgGridColumn
                headerName='gali'
                width={width}

                cellRenderer={(data) => {
                  // console.log(data.data.data.gali);

                  return <>{data.data.data.gali}</>;
                }}
              />
            </AgGridReact>
          </div>
        </>
      ) : (
       <>
       <div className='table_div1'>
       <img src={Loader} height='200px' width='200px' alt=''/>
       <h1>...please wait</h1>
       </div>
       </>
      )}
    </div>
  );
}

export default Tableresult;
