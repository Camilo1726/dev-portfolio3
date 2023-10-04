const express = require('express');
const app = express();

app.set('view engine','ejs');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('index.ejs', {title:'Home'})
})


router.get('/about',(req,res,next)=>{
    res.render('about', {title:'About'})
})


router.get('/contactus',(req,res,next)=>{
    res.render('contactus', {title:'Contact us'})
})

router.get('/projects' ,(req,res,next)=>{
    console.log("Accessing /projects route");
    res.render('projects', {title:'projects'})
})


router.get('/services',(req,res,next)=>{
    res.render('services', {title:'Services'})
})

module.exports = router;