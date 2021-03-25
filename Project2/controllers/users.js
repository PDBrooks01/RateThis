const express = require('express')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')


//USER NEW Route
router.get('/new',(req,res)=>{
  res.render('users/new.ejs',{
    currentUser: req.session.currentUser
  })
})

//USER CREATE ROUTE
router.post('/',(req,res)=>{
  req.body.password = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))

  User.create(req.body,(err,createdUser)=>{
    if (err) {
      console.log(err);
    }else {
    res.render('/ratethis')
    }
  })
})


module.exports = router
