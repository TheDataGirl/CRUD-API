const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')
const fileupload = require('express-fileupload')

router.use(fileupload())

//To read all values
router.get('/', async(req,res) =>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)

    }catch(err){
        res.send('Error' + err)
    }
    
})

//To get the pm1, pm 2.5 and pm 10 values 
router.get('/device', async(req,res) =>{
    try{
        
        const aliens = await Alien.find({projection: { p1: 1, p25: 1, p10:1 }})
        
        res.json(aliens)

    }catch(err){
        res.send('Error' + err)
    }
    
})

//To read the individual data of each device
router.get('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)

    }catch(err){
        res.send('Error' + err)
    }
    
})


//To create a new entry
router.post('/',async(req,res) =>{
    const alien = new Alien({
        device: req.body.device,
        t:req.body.t,
        w:req.body.w,
        h:req.body.h,
        p1:req.body.p1,
        p25:req.body.p25,
        p10:req.body.p10

    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
//To upload file
router.post('/upload', async(req,res) =>{
    try{
        const a0 = await alien.send({
            success:true,
            message: "File Uploaded!"
        })
        res.json(a0)
    }catch(err){
        res.send('Error')
    }
    
})

module.exports = router