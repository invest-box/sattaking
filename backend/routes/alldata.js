const express = require('express')
const app = express();
const main_model = require('../models/main_model');
const middleware = require('../routes/user/check_auth')


const alldata_route = app.post('/alldata',middleware,async(req,res)=>{
    console.log(req.body.date)
    const alldata_data = new main_model(req.body);
    alldata_data.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
    
})

module.exports= alldata_route