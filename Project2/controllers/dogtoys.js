const express = require('express')
const multer = require('multer')
const router = express.Router()


const Dogtoy = require('../models/dogtoys')

const fileStorage = multer.diskStorage({
  destination:'./public/images/',
  filename:(req,file,cb)=>{
    cb(null,file.fieldname +"-"+ Date.now()+file.originalname)
  }
})
const upload = multer({storage:fileStorage}).single('img')

//Index Route
router.get('/',(req,res)=>{
  Dogtoy.find({},(err, foundDogtoys,next)=>{
    if (err) {
      console.log(err)
      next(err)
    }else {
      res.render('index.ejs',{dogtoys: foundDogtoys, currentUser: req.session.currentUser})
    }
  })
})


//New Route
router.get('/new',(req,res)=>{
  res.render('new.ejs',{currentUser: req.session.currentUser })
})



//Seed Route
router.get('/seed',(req,res)=>{
  Dogtoy.create([
    {
      name:"Kong® Classic",
      brand:"Kong",
      img:"../public/images/Kong-Classic.jpeg",
      size:[0,1,2,3,4,5]
    },
    {
      name:"Kong® Extreme",
      brand:"Kong",
      img:"../public/images/Kong-Extreme.jpeg",
      size:[0,1,2,3,4,5]
    },
    {
      name:"KONG® Floppy Knot Fox Dog Toy",
      brand:"Kong",
      img:"../public/images/FlopFox.jpeg",
      size:[1,2,3]
    }
  ],(err,data) =>{
    if (err) {
      console.log(err)
    }
    res.redirect('/ratethis')
  })
})

//Show Route
router.get('/:id',(req,res)=>{
  Dogtoy.findById(req.params.id, (err, foundDogtoys)=>{
    res.render('show.ejs',{dogtoy:foundDogtoys, currentUser: req.session.currentUser })
  })
})

router.get('/:id/review',(req,res)=>{
  Dogtoy.findById(req.params.id,(err,foundDogtoys)=>{
    res.render('review.ejs',{dogtoy:foundDogtoys, currentUser: req.session.currentUser })
  })
})


// POST Route
// router.post('/',(req,res)=>{
//   upload((req,res)=>{
//       res.render('index',{
//         file: `images/${req.file.filename}`
//       })
//     })
//   })

router.post('/',upload, (req,res)=>{
  req.body.img = req.file
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

//Posting Reviews
router.put('/:id',(req,res)=>{
  Dogtoy.findByIdAndUpdate(req.params.id,(err,review)=>{
    $push:{
      reviews:[{username: req.body.username, review: req.body.review}
    ]}
    res.send("Review Successfully Added")
  })
})


//Delete Route
router.delete('/:id',upload,(req,res)=>{
  Dogtoy.findByIdAndRemove(req.params.id,(err,data)=>{
    if (err) {
      console.log(err)
    }else {
      res.redirect('/ratethis')
    }
  })
})

//Edit Route
router.get('/:id/edit',(req,res)=>{
  Dogtoy.findById(req.params.id,(err,foundDogtoys)=>{
    res.render('edit.ejs',{ dogtoy:foundDogtoys, currentUser: req.session.currentUser })
  })
})

//Update Route
router.put('/:id',upload,(req,res)=>{
  req.body.img = req.file.filename
  Dogtoy.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedToy)=>{
    res.redirect('/ratethis')
  })
})


//Need to add Review Post Route

module.exports = router
