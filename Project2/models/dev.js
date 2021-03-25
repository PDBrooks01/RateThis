const mongoose = require ('mongoose')
const {Schema, model} = mongoose

const devSchema = new Schema ({
	username:{type:String,require:true,unique:true},
	password: String

})

const Dev = model('Dev',devSchema)

module.exports = Dev
