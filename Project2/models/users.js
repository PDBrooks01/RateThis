const mongoose = require ('mongoose')
const {Schema, model} = mongoose

const userSchema = new Schema ({
	username:{type:String,require:true,unique:true},
	breed: {type: Map, require: true},
	playStyle: {type: Map, require:true},
	reviewsGiven: Number,
  password: String

})

const User = model('User',userSchema)

module.exports = User
