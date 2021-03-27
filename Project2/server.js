require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const session = require('express-session')

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
    console.log("database connection checked...");
})

db.on('error', (err)=> { console.log('ERROR: ', err)});
db.on('connected', ()=> { console.log("mongo connected")})
db.on('disconnected', ()=> { console.log("mongo disconnected")})


//CSS Connect
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))


//SESSION

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))


//Controllers
const dogtoyControllers = require('./controllers/dogtoys')
app.use('/ratethis',dogtoyControllers)
const userControllers = require('./controllers/users')
app.use('/users',userControllers)
const sessionControllers = require('./controllers/sessions')
app.use('/sessions',sessionControllers)


app.listen(PORT, ()=>{
  console.log('Server is ready to roll...');
})
