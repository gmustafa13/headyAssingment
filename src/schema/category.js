const mongoose = require('mongoose')
const schema  = mongoose.Schema

let categorySchema = new schema({
name:{
    type: String,
    require: true,
    trim: true
},
parentCategory:{
    type : String
}

})

 module.exports = mongoose.model("Category",categorySchema)