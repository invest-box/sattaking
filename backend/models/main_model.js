const mongoose = require('mongoose');

const mainSchema = new mongoose.Schema({
    date: {
       day:{
        type: Number,
        required: true
       },
       month:{
        type: Number,
        required: true
       },
       year:{
        type: Number,
        required: true
       }
    },
    data:{
        gali:{
            type: Number,
            min: 0,
            max: 99
        },
        disawar:{
            type: Number,
            min: 0,
            max: 99
        },
        ghaziabad:{
            type: Number,
            min: 0,
            max: 99
        },
        faridabad:{
            type: Number,
            min: 0,
            max: 99
        },
        ghazipur_bazar:{
            type: Number,
            min: 0,
            max: 99
        }
    }

})

const Main = mongoose.model('main', mainSchema);
module.exports = Main;