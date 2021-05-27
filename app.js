const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CrudX'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

// to use json format
app.use(express.json())

//Using all the routes
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, function(){
    console.log('Server started')
})

