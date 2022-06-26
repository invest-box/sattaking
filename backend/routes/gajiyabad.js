const express = require('express')
const app = express();
const main_model = require('../models/main_model');
const middleware = require('../routes/user/check_auth')


const gajiyabad_route = app.post('/ghaziabad',middleware,async(req,res)=>{
    console.log(req.body)
    const{date,data}=req.body
    
        main_model.updateOne({"date" :date} , {$set:{'data.ghaziabad':data.ghaziabad}}).then((data)=>{
            res.send(data)
        }).catch((error)=>{
            console.log(error)
        })

    
})

module.exports= gajiyabad_route