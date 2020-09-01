const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressvalidator = require('express-validator')
var cors = require('cors')
const app = express()

const port = process.env.PORT || 5000
require('./savedatabase/user')

mongoose.connect('mongodb://localhost:27017/node-task',{ useNewUrlParser: true },(err)=>{
    if (err){
        console.log(err)
    }
    console.log('connected to Mongodb')
})

app.use(bodyParser.json())
app.use(cors())
app.use(expressvalidator())
require('./route/user')(app)

app.listen(port,()=>{
    console.log('app running 5000')
})
