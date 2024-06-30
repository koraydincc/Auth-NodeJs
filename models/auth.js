const mongoose = require('mongoose')

const authSchema  = new mongoose.Schema({
       username: 
       {
        type: String,
        required: true,
        trim: true, 
       },
       email:
       {
        type:String,
        required: true,
        trim: true,
        unique: true,
       },
       password: 
       {
        type: String,
        required: true,
       }
})

module.exports = mongoose.model('Auth', authSchema)