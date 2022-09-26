const express = require('express')
const app = express();
const main_model = require('../models/main_model');


const databydate_route = app.post('/databydate', async (req, res) => {
    
    const{month,year}=req.body.date;
    const getData = async () => {
        var main = await main_model.find({'date.month':month,'date.year':year})
       return main;
    }
    var allData = await getData();
    if (allData) {
        res.status(200).send({status:200,data:allData})
    } else {
        res.status(400).send({status:400, response: 'data not found' })
    }

    


})

module.exports = databydate_route