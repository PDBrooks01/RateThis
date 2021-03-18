const mongoose = require('mongoose')
const {Schema, model}=mongoose

const dogtoySchema = new Schema({
  name:{type: String, required:true},
  brand:{type: String, required:true},
  img:{type:String,required:true},
  size:{type: Array, required:true}
})

const Dogtoy = model('Dogtoy',dogtoySchema)

module.exports = Dogtoy
