const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type: String, 
        trim:true
    },email:{
        type: String
    },
    phoneNumber:{type: Number}
})





const Node = mongoose.model('Node', userSchema)
module.exports = Node