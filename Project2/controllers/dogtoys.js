const express = require('express')
const router = express.Router()

const Dogtoy = require('../models/dogtoys')

router.get('/',(req,res)=>{
  Dogtoy.find({},(err, foundDogtoys,next)=>{
    if (err) {
      console.log(err)
      next(err)
    }else {
      res.render('index.ejs',{dogtoys: foundDogtoys})
    }
  })
})



module.exports = router
