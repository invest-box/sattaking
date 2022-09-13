import React, { useState, useEffect } from 'react';
import links from '../../links';
import '../../styles/card.css'
function Card(props) {
    const [date, setDate] = useState();
    const [auth, setAuth] = useState();
    const [value, setValue] = useState();
    const [name, setName] = useState('');

    useEffect(() => {
        let token = window.localStorage.getItem('token');
        if (token) {
            setAuth(token)
        }
    }, [])


    function dateInput(e) {
        let date = {
            day:parseInt(e.target.value.split('-')[2]),
            month:parseInt(e.target.value.split('-')[1]),
            year:parseInt(e.target.value.split('-')[0])
        }
        setDate(date)
    }
    function valueInput(e) {
       
        setName(e.target.name)
        setValue(e.target.value)
    }

    async function submitData(e) {

        if (name == 'disawar') {
            var data = {
                gali: 0,
                disawar: value,
                ghaziabad: 0,
                faridabad: 0,
                ghazipur_bazar: 0
            }
        }else if(name=="faridabad"){
             data = {
                gali: 0,
                disawar: 0,
                ghaziabad: 0,
                faridabad: value,
                ghazipur_bazar: 0
            }
        }else if(name=="gali"){
             data = {
                gali: value,
                disawar: 0,
                ghaziabad: 0,
                faridabad: 0,
                ghazipur_bazar: 0
            }
        }else if(name=="ghaziabad"){
             data = {
                gali: 0,
                disawar: 0,
                ghaziabad: value,
                faridabad: 0,
                ghazipur_bazar: 0
            }
        }else if(name=="ghazipur_bazar"){
             data = {
                gali: 0,
                disawar: 0,
                ghaziabad: 0,
                faridabad: 0,
                ghazipur_bazar: value
            }
        }
        fetch(`${links.baseUrlLink}${e.target.name}`, {
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
            }).catch(err => {
                console.log(err)
            })



    }

    return (

        <div className="cardMainDiv">
            <h3 className='cardName'>{props.name}</h3>
            <div className="cardHead">
                <p>Enter date for {props.name}</p>
                <input className='cardDate' type='date' onChange={(e) => { dateInput(e) }} />
            </div>
            <div className="cardBottom">
                <p>Enter Value for {props.name}</p>
                <input className='cardInput' type='text' name={props.name} value={value} onChange={(e) => { valueInput(e) }} />

            </div>
            <button type='button' name={props.name} onClick={(e) => submitData(e)}>submit</button>
        </div>
    );
}

export default Card;

