const express = require('express')
require('dotenv').config()

const mongoose = require('mongoose')

const app = express()

const UserInput = require('./models/userInputSchema')

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log('connected to db & server is listening to port:', process.env.PORT))
    })

app.use(express.json())

app.get('/api/userinputs/', async (req, res) => {
    //get all records
    console.log("called")
    try {
        const allUserInputs = await UserInput.find({}).sort({ createdAt: -1 })
        res.status(200).json(allUserInputs)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.post('/api/userinputs/', async (req, res) => {
    //add one record
    const { input } = req.body
    console.log("this is the req" + req.body)
    try {
        const newUserInput = await UserInput.create({ input })
        res.status(200).json(newUserInput)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }

})