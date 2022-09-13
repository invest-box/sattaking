const express = require('express')
const app = express();
const main_model = require('../models/main_model');


const mainGetLiveData_route = app.post('/getlivedata', async (req, res) => {
    
    const{day,month,year}=req.body.date;
    const getData = async () => {
        var main = await main_model.findOne({'date.day':day,'date.month':month,'date.year':year})
       return main;
    }
    var allData = await getData();
    if (allData) {
        res.status(200).send({status:200,data:allData})
    } else {
        res.status(400).send({status:400, response: 'data not found' })
    }

    


})

module.exports = mainGetLiveData_route