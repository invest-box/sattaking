const express = require('express')
const app = express();
const main_model = require('../models/main_model');
const middleware = require('../routes/user/check_auth')


const disawar_route = app.post('/disawar',middleware,async(req,res)=>{
    console.log(req.body)
    const disawar_data = new main_model(req.body);
    disawar_data.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
    
})

module.exports= disawar_route