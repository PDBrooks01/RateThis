require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

//Database Setting
const mongoose = require('mongoose')
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//Database Creation
const mongoURI = process.env.MONGODBURI
const db = mongoose.connection

//Connecting mongo
mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("database connection checked..");
})

db.on('error', (err)=> { console.log('ERROR: ', err)});
db.on('connected', ()=> { console.log("mongo connected")})
db.on('disconnected', ()=> { console.log("mongo disconnected")})


//CSS Connect
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))


//Controllers
const dogtoyControllers = require('./controllers/dogtoys')
app.use('/ratethis',dogtoyControllers)


app.listen(PORT, ()=>{
  console.log('Server is ready to roll...');
})
