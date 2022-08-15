const express = require('express')
const app = express();
const main_model = require('../models/main_model');


const mainGetData_route = app.get('/getmaindata', async (req, res) => {
    const getData = async () => {
        var main = await main_model.find({}).sort({'date.month':-1,'date.day':-1}).limit(31)
       return main;
    }
    var allData = await getData();
    console.log(allData)
    if (allData) {
        res.status(200).send(allData)
    } else {
        res.status(400).send({ response: 'data not found' })
    }


})

module.exports = mainGetData_route