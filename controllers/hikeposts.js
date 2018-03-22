const express = require('express');
const router = express.Router();
const Hike = require('../models/hikes.js');

router.get('/new', (req, res)=>{
  res.render('hikes/new.ejs');
})

router.post('/', (req, res)=>{
  Hike.create(req.body, (err, createdHike)=>{
    res.redirect('/hikes');
  })
})

router.get('/', (req, res)=>{
  Hike.find({}, (err, allHikes)=>{
    res.render('hikes/index.ejs', {
      hikes: allHikes
    })
  })
})

router.get('/:id', (req, res)=>{
  Hike.findById(req.params.id, (err, foundHike)=>{
    res.render('hikes/show.ejs', {
      hikes: foundHikes
    })
  })
})

router.get('/:id/edit', (req, res)=>{
  Hike.findById(req.params.id, (err, foundHike)=>{
    res.render('hikes/edit.ejs', {
      hikes: foundHikes
    })
  })
})

router.put('/:id', (req, res)=>{
  Hike.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedHike)=>{
    res.redirect('/hikes' + req.params.id)
  })
})

router.delete('/:id', (req, res)=>{
  Hike.findByIdAndRemove(req.params.id, (err, deletedHike)=>{
    res.redirect('/hikes')
  })
})

module.exports = router;
