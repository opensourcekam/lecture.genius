var Class = require('../database/models/Class.js');
var Lecture = require('../database/models/Lecture.js');
var express = require('express');
var router = express.Router();
var db = require('../connection.js');


/*

  CLASSES
    POST method to create a new class
      /create/class
      {
        ...
        lectures: [lectureIds]
      }
  LECTURES
    POST method to create a lecture
    /create/lecture/
      POST body contains class id

      lecture object in database ~ {
        ....
        classId: 
      }


*/

router.post('/create/:type', (req, res, next) => {
	// use query params
  console.log(req.body, req.query, req.params);

  if (req.params.type === 'class') {

    if (!("lectures" in req.body)) {
      req.body["lectures"] = []
    }

    Class.create(req.body, (err, doc) => {
      console.log("Reach Arrow function of Class.create");
      console.log(doc);
      if(err){
        res.json({"error": err});
      } else {
        res.json({"success": doc})
      }
   });
  }  

  if (req.params.type === 'lecture') {

    if (!req.body.classId) {
      res.end(400, "You must hvae a classId when making a new lecture");
    }

  	Lecture.create(req.body, (err, doc) => {
      console.log(doc);
      if(err){
        res.json({"error": err});
      } else {

        Class.insert({_id: ObjectID(req.body.classId)}, {
          $add: {
            
            "lectures": doc._id
          }
        });

        res.json({"success": doc})
      }
   });




  }
})

router.post('/search/:id', (req, res, next) => {
  Class.findById(res.query.id, (err, doc) => {
    console.log(doc);
  })
})

router.put('/edit', function(req, res) {
  var id = req.body.id;
  console.log(req.body)
  Class.update(req.body.id, function (err, doc) {
        console.log(doc)
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});

router.delete('/delete', function(req, res, next) {
  var id = req.body.id;
  console.log(req.body)
  Class.findByIdAndRemove(req.body.id, function(err, r) {
    res.json(r)
  });
});

router.get('/classes/:id', (req, res, next) => {
  Class.findById(req.params.id, function(err, data){
  console.log(data)
  res.json(data)
  res.end(200)

  }) 
})

router.post('/classes/')

module.exports = router;
