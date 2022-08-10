import React, { useState, useEffect } from 'react';
import links from '../../links';
import '../../styles/card.css'
function Card1(props) {
    const [date, setDate] = useState();
    const [disawar, setdisawar] = useState('');
    const [faridabad, setfaridabad] = useState('');
    const [ghaziabad, setghaziabad] = useState('');
    const [ghazipur_bazar, setghazipur_bazar] = useState('');
    const [gali, setgali] = useState('');
    const [auth, setAuth] = useState();
   
    useEffect(() => {
        var token = window.localStorage.getItem('token');
        if (token) {
            setAuth(token)
        }
    }, [])

    function dateInput(e) {

        var localdate = e.target.value.split('-').reverse().join('-')

        setDate(localdate)
    }

    function disawarInput(e) {
        setdisawar(e.target.value)

    }
    function faridabadInput(e) {
        setfaridabad(e.target.value)

    }
    function ghaziabadInput(e) {
        setghaziabad(e.target.value)

    }
    function ghazipur_bazarInput(e) {
        setghazipur_bazar(e.target.value)

    }
    function galiInput(e) {
        setgali(e.target.value)

    }
    function submitForm() {
        if (!date) {
            alert("pleasse enter date")
        } else if (!disawar) {
            alert("pleasse enter date")
            return 0;
        } else if (!faridabad) {
            alert("pleasse enter faridabad")
            return 0;
        } else if (!ghaziabad) {
            alert("pleasse enter ghaziabad")
            return 0;
        } else if (!ghazipur_bazar) {
            alert("pleasse enter ghazipur_bazar")
            return 0;
        } else if (!gali) {
            alert("pleasse enter gali")
            return 0;
        }

        var data = {gali,disawar,ghaziabad,faridabad,ghazipur_bazar }
        
     if(data){
        fetch(`${links.allDataLink}`, {
            method: "post",
            headers: {
                'authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    date:date,
                    data:data
                })
        })
            .then((response) => {
                return response.json()
            }).then(async (data) => {
                console.log(data)
                window.location.reload();
            }).catch(err => {
                console.log(err)
            })
     }

        }
    // }


    return (

        <div className="cardMainDiv">
            <h3 className='cardName'>allData</h3>
            <div className="cardHead">
                <p>Enter date</p>
                <input className='cardDate' type='date' onChange={(e) => { dateInput(e) }} />
            </div>
            <div className="cardBottom">
                <p>Enter Value for disawar  </p>
                <input className='cardInput' type='text' value={disawar} onChange={(e) => { disawarInput(e) }} />
            </div>
            <div className="cardBottom">
                <p>Enter Value for faridabad</p>
                <input className='cardInput' type='text' value={faridabad} onChange={(e) => { faridabadInput(e) }} />
            </div>
            <div className="cardBottom">
                <p>Enter Value for ghaziabad</p>
                <input className='cardInput' type='text' value={ghaziabad} onChange={(e) => { ghaziabadInput(e) }} />
            </div>
            <div className="cardBottom">
                <p>Enter Value for ghazipur_bazar</p>
                <input className='cardInput' type='text' value={ghazipur_bazar} onChange={(e) => { ghazipur_bazarInput(e) }} />
            </div>
            <div className="cardBottom">
                <p>Enter Value for gali</p>
                <input className='cardInput' type='text' value={gali} onChange={(e) => { galiInput(e) }} />
            </div>
            <button type='button' onClick={() => submitForm()}>submit</button>
        </div>
    );
}

export default Card1;