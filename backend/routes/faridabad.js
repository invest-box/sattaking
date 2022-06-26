const express = require('express')
const app = express();
const main_model = require('../models/main_model');
const middleware = require('../routes/user/check_auth')


const faridabad_route = app.post('/faridabad',middleware,async(req,res)=>{
    const {date,data}= req.body
    main_model.updateOne({"date" :date} , {$set:{'data.faridabad':data.faridabad}}).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })

    
})

module.exports= faridabad_route