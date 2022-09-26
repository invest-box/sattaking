import React, { useState, useEffect,useMemo } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import 'ag-grid-community/dist/styles/ag-theme-balham.css'; // Optional theme CSS
import links from '../links';
import Navcontact from '../components/homecomponents/Navcontact';
import Navbar from '../components/homecomponents/Navbar';
import Footer from '../components/homecomponents/Footer';
import Loader from '../images/jelly-fluid-loader.gif';
import '../styles/table.css';
import '../styles/finddatabydate.css';
function Finddatabydate() {
    const [data, setData] = useState();
    const [width, setwidth] = useState('');
    const [date1, setdate1] = useState('');


    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        tableWidth()
    });

    const tableWidth = () => {

        if (window.innerWidth <= 575) {
            setwidth(90)
        } else if (window.innerWidth > 575 && window.innerWidth < 768) {
            setwidth(110)
        } else if (window.innerWidth > 769 && window.innerWidth < 991) {
            setwidth(130)
        } else if (window.innerWidth > 992 && window.innerWidth <= 1120) {
            setwidth(150)
        } else {
            setwidth(200)
        }
    }

    const getData = async () => {
     if(date1 !==''){
        var date ={
            month: date1.split('-')[1],
            year: date1.split('-')[0]
        }
     }else{
        var date ={
            month:new Date().getUTCMonth()+1,
            year: new Date().getUTCFullYear()
        }
     }
       
        await fetch(links.databydate,{
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    date:date
                })
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                // console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const findEquall = (number) => {
        let num = number;
        let equall = 0;
        while (num > 10) {
            equall = num % 10;
            num = Math.floor(num / 10);
        }
        if (num == equall) {
            return true;
        }
        return false;
    }

    const enterDate = (e) => {
        setdate1(e.target.value)
       
    }
   
   
   
    return (
        <>
            <Navcontact />
            <Navbar />

            <div className="mainenterDate">
                <div className="enterDate">
                    <label htmlFor="bdaymonth">Select (month and year):</label>
                    <input type="month" value={date1} onChange={(e) => { enterDate(e) }} id="bdaymonth" name="bdaymonth" />
                </div>

                <button type='button' onClick={()=>{getData()}}>Enter</button>
            </div>

            <div className='table_div'>
                {data ? (
                    <>


                        <div
                            className='ag-theme-alpine'
                            style={{ width: '100%', zIndex: 0 }}
                        >
                            <AgGridReact rowData={data} domLayout='autoHeight'
                            >
                                <AgGridColumn
                                    headerName='Date'

                                    width={width}
                                    headerClass="disawar_header"

                                    cellRenderer={(data) => {
                                        var day = data.data.date.day
                                        var month = data.data.date.month
                                        var year = data.data.date.year

                                        return <p className='tableValue'>{day}/{month}/{year}</p>;
                                    }}
                                />
                                <AgGridColumn
                                    headerName='disawar'
                                    width={width}
                                    headerClass="disawar_header"

                                    cellRenderer={(data) => {

                                        // console.log(findEquall(data.data.data.disawar))

                                        if (data.data.data.disawar == 0) {
                                            return <p className='tableValue1'>XX</p>;
                                        }
                                        if (findEquall(data.data.data.disawar)) {
                                            return <p style={{ backgroundColor: "green" }} className='tableValue1'>{data.data.data.disawar}</p>;
                                        }

                                        return <p className='tableValue'>{data.data.data.disawar}</p>;
                                    }}
                                />
                                <AgGridColumn
                                    headerName='faridabad'
                                    width={width}
                                    headerClass="disawar_header"

                                    cellRenderer={(data) => {
                                        // console.log(data.data.data.faridabad);
                                        if (data.data.data.faridabad == 0) {
                                            return <p className='tableValue1'>XX</p>;
                                        }
                                        if (findEquall(data.data.data.faridabad)) {
                                            return <p style={{ backgroundColor: "green" }} className='tableValue1'>{data.data.data.faridabad}</p>;
                                        }
                                        return <p className='tableValue'>{data.data.data.faridabad}</p>;
                                    }}
                                />
                                <AgGridColumn
                                    headerName='ghaziabad'
                                    headerClass="disawar_header"
                                    width={width}
                                    cellRenderer={(data) => {
                                        // console.log(data.data.data);
                                        if (data.data.data.ghaziabad == 0) {
                                            return <p className='tableValue1'>XX</p>;
                                        }
                                        if (findEquall(data.data.data.ghaziabad)) {
                                            return <p style={{ backgroundColor: "green" }} className='tableValue1'>{data.data.data.ghaziabad}</p>;
                                        }
                                        return <p className='tableValue'>{data.data.data.ghaziabad}</p>;
                                    }}
                                />
                                <AgGridColumn
                                    headerName='ghazipur_bazar'
                                    width={width}
                                    headerClass="disawar_header"
                                    cellRenderer={(data) => {
                                        // console.log(data.data.data.ghazipur_bazar);
                                        if (data.data.data.ghazipur_bazar == 0) {
                                            return <p className='tableValue1'>XX</p>;
                                        }
                                        if (findEquall(data.data.data.ghazipur_bazar)) {
                                            return <p style={{ backgroundColor: "green" }} className='tableValue1'>{data.data.data.ghazipur_bazar}</p>;
                                        }
                                        return <p className='tableValue'>{data.data.data.ghazipur_bazar}</p>;

                                    }}
                                />
                                <AgGridColumn
                                    headerName='gali'
                                    width={width}
                                    headerClass="disawar_header"

                                    cellRenderer={(data) => {
                                        // console.log(data.data.data.gali);
                                        if (data.data.data.gali == 0) {
                                            return <p className='tableValue1'>XX</p>;
                                        }
                                        if (findEquall(data.data.data.gali)) {
                                            return <p style={{ backgroundColor: "green" }} className='tableValue1'>{data.data.data.gali}</p>;
                                        }
                                        return <p className='tableValue'>{data.data.data.gali}</p>;
                                    }}
                                />
                            </AgGridReact>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='table_div1'>
                            <img src={Loader} height='200px' width='200px' alt='' />
                            <h1>...please wait</h1>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Finddatabydate;