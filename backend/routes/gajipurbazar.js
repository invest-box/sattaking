const express = require('express')
const app = express();
const main_model = require('../models/main_model');
const middleware = require('../routes/user/check_auth')


const gajipurbazar_route = app.post('/ghazipur_bazar',middleware,async(req,res)=>{
    console.log(req.body)
    const{date,data}=req.body
    
        main_model.updateOne({"date" :date} , {$set:{'data.ghazipur_bazar':data.ghazipur_bazar}}).then((data)=>{
            res.send(data)
        }).catch((error)=>{
            console.log(error)
        })

    
})

module.exports= gajipurbazar_route