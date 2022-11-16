var express = require('express');
var jwt = require("jsonwebtoken");
var router = express.Router();

router.post('/login', function(req, res) {
  const token = req.body;
  const decoded = jwt.verify(token, 'secret');
  console.log(decoded);

  const {email} = decoded;
  
  if(email) {
    return res.status(200).send({success: true, email});
  }

  res.status(404).send({error: "teapa"});
});

module.exports = router;
