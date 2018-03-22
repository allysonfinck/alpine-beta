const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res)=>{
  res.render('users/new.ejs')
})

module.exports = router;
