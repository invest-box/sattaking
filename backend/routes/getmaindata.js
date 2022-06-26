const express = require('express')
const app = express();
const main_model = require('../models/main_model');


const mainGetData_route = app.get('/getmaindata', async (req, res) => {
    const getData = async () => {
        var main = await main_model.find({})
        return main
    }
    var allData = await getData();
    if (allData) {
        res.status(200).send(allData)
    } else {
        res.status(400).send({ response: 'data not found' })
    }


})

module.exports = mainGetData_route