const express = require('express');
const router= express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname+'/up');
    },
    filename:(req,file,cb)=>{
        cb(null,"123");
    }
})

const upload = multer({storage:storage})
router.post('/up',upload.single('upl'),(req,res)=>{
    res.statusCode=200;
    res.redirect('http://localhost:3000/')
    console.log("received");
})




module.exports=router;