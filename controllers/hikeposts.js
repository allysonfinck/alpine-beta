const express = require('express');
const router = express.Router();
const Hike = require('../models/hikes.js');


router.get('/new', (req, res)=>{
  res.render('hikes/new.ejs', {
    currentUser: req.session.currentUser
  });
})

router.post('/', (req, res)=>{
  if(req.body.pets === 'on'){
    req.body.pets = true;
  } else {
    req.body.pets = false;
  }
  Hike.create(req.body, ()=>{
    res.redirect('/hikes');
  })
})

router.get('/', (req, res)=>{
  Hike.find({}, (err, allHikes)=>{
    res.render('hikes/index.ejs', {
      currentUser: req.session.currentUser,
      hikes: allHikes
    })
  })
})

router.get('/:id', (req, res)=>{
  Hike.findById(req.params.id, (err, foundHike)=>{
    res.render('hikes/show.ejs', {
      currentUser: req.session.currentUser,
      hikes: foundHike
    })
  })
})

router.get('/:id/edit', (req, res)=>{
  Hike.findById(req.params.id, (err, foundHike)=>{
    res.render('hikes/edit.ejs', {
      currentUser: req.session.currentUser,
      hikes: foundHike
    })
  })
})

router.put('/:id', (req, res)=>{
  if(req.body.pets === 'on'){
    req.body.pets = true;
  } else {
    req.body.pets = false;
  }
  Hike.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedHike)=>{
    res.redirect('/hikes');
  })
})


router.delete('/:id', (req, res)=>{
  Hike.findByIdAndRemove(req.params.id, (err, deletedHike)=>{
    res.redirect('/hikes')
  })
})

module.exports = router;
