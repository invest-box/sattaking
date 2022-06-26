const mongoose = require('mongoose');

const mainSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
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