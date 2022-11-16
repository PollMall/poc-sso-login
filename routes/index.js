var express = require('express');
var jwt = require("jsonwebtoken");
var router = express.Router();

router.post('/login', function(req, res) {
  const { token } = req.body;
  console.log(token);

  try{
    const decoded = jwt.verify(token, 'secret');
    
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
