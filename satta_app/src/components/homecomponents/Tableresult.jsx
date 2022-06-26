import React, { useState, useEffect } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import links from '../../links';
import '../../styles/table.css';
import Loader from '../../images/jelly-fluid-loader.gif'
function Tableresult(props) {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

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
            style={{  width: '75%', zIndex: 0 }}
          >
            <AgGridReact rowData={data} domLayout='autoHeight'
            overlayLoadingTemplate={
              '<span className="ag-overlay-loading-center">Please wait while your rows are loading...</span>'
            }
            >
              <AgGridColumn
                headerName='Date'
                
                cellRenderer={(data) => {
                  // console.log(data.data.date);

                  return <>{data.data.date}</>;
                }}
              />
              <AgGridColumn
                headerName='disawar'
                cellRenderer={(data) => {
                  // console.log(data.data.data.disawar);

                  return <>{data.data.data.disawar}</>;
                }}
              />
              <AgGridColumn
                headerName='faridabad'
                cellRenderer={(data) => {
                  // console.log(data.data.data.faridabad);

                  return <>{data.data.data.faridabad}</>;
                }}
              />
              <AgGridColumn
                headerName='ghaziabad'
                cellRenderer={(data) => {
                  // console.log(data.data.data);

                  return <>{data.data.data.ghaziabad}</>;
                }}
              />
              <AgGridColumn
                headerName='ghazipur_bazar'
                cellRenderer={(data) => {
                  // console.log(data.data.data.ghazipur_bazar);

                  return <>{data.data.data.ghazipur_bazar}</>;
                }}
              />
              <AgGridColumn
                headerName='gali'
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
