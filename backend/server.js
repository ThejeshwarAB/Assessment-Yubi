const express = require('express')
require('dotenv').config()

const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log('connected to db & server is listening to port:', process.env.PORT))
    })
    
app.use(express.json())