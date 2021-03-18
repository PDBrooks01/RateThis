const express = require('express')
const router = express.Router()

const Dogtoy = require('../models/dogtoys')

//Index Route
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





//Seed Route
router.get('/seed',(req,res)=>{
  Dogtoy.create([
    {
      name:"Kong® Classic",
      brand:"Kong",
      img:"https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/T1_1_1000x1000.jpg",
      size:[0,1,2,3,4,5]
    },
    {
      name:"Kong® Extreme",
      brand:"Kong",
      img:"https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/K1_1_1000x1000.jpg",
      size:[0,1,2,3,4,5]
    },
    {
      name:"KONG® Floppy Knot Fox Dog Toy",
      brand:"Kong",
      img:"https://s7d2.scene7.com/is/image/PetSmart/5260993?$CLEARjpg$",
      size:[1,2,3]
    }
  ],(err,data) =>{
    if (err) {
      console.log(err)
    }
    res.redirect('/ratethis')
  })
})


//POST Route
router.post('/',(req,res)=>{
  Dogtoy.create(req.body,(error,createdToy)=>{
    if (error){
      console.log(error)
      res.send(error)
    }else {
      // console.log(createdToy)
      res.redirect('/ratethis')
    }
  })
})



module.exports = router
