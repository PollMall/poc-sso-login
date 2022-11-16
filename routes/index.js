const express = require('express');
const path = require("path");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/login', function(req, res) {
  const { token } = req.body;
  console.log(token);

  try{
    const decoded = jwt.decode(token);
    
    const {email} = decoded;
    
    if(email) {
      return res.status(200).send({success: true, email});
    }
    
    res.status(404).send({ error: "Email does not exist" });
  } catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;
