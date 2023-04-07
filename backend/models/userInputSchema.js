const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userInputSchema = new Schema({
    input: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('UserInput', userInputSchema)