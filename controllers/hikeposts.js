const express = require('express');
const router = express.Router();
const Hike = require('../models/hikes.js');

router.get('/', (req, res)=>{
  res.render('hikes/index.ejs');
})

module.exports = router;
