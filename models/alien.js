const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    device:{
        type:String,
        required:true
    },
    t:{
        type: String,
        required:true
    },
    w:{
        type:Number,
        required:true
    },
    h:{
        type: String,
        required:true

    },
    p1:{
        type: Number,
        required:true

    },
    p25:{
        type: Number,
        required:true

    },
    p10:{
        type: Number,
        required:true

    }
})

module.exports = mongoose.model('Alien',alienSchema)