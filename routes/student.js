var express = require('express');
var router = express.Router();
var Student = require('../database/Models/Student.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;


  Student.findOne({username: username, password: password}, function(err, student) {
    if(err) {
      console.log(err);
      return res.status(500).send();
    }

  if(!Student) {
    return res.status(404).send();
  }

  console.log(res)
  return res.status(200).json(student);
  });
});
router.post('/register', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;

  var newstudent = new Student();
  newstudent.username = username;
  newstudent.password = password;
  newstudent.firstname = firstname;
  newstudent.lastname = lastname;
  newstudent.save(function(err, savedStudent) {
    if(err) {
        console.log(err)
        return res.status(500).send();
    }
        return res.status(200).json({savedStudent});
    })

 })

module.exports = router;