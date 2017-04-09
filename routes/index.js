const Class = require('../database/models/Class.js');
const Lecture = require('../database/models/Lecture.js');
const express = require('express');
const router = express.Router();
const db = require('../connection.js');



// //Landing page
// router.get('/'. function(req, res, next) {
//   res.render
// });

router.post('/create/class', (req, res, next) => {
    // use query params
    console.log(req.body, req.query, req.params);
    if (!req.body._id) {
        res.status(400);
    }

    Class.create(req.body, (err, doc) => {
        console.log("Reach Arrow function of Class.create");
        console.log(doc);
        if (err) {
            res.json({
                "error": err
            });
        } else {
            res.json({
                "success": doc
            })
        }
    });
})

router.post('/create/lecture', (req, res, next) => {
    if (!req.body._id) {
        res.status(400);
    }

    // lectures needs to match the _class with the _id of the Class model
    // so here we need to grab out the id for our class
    Class.findById(req.body._id, (err, classDoc) => {
        console.log('req.body', req.body)
        let {
            title,
            lectureNotes,
            courseDate,
            courseInstructor
        } = req.body;
        let lecture = Lecture.create({
            _creator: req.body._id,
            title,
            lectureNotes,
            courseDate,
            courseInstructor
        }, (err, lectureDoc) => {
            console.log(lectureDoc);
            classDoc.lectures.push(lectureDoc);
            classDoc.save((err, doc) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(doc)
                }
            });
        })

    })

})

router.post('/search/:id', (req, res, next) => {
    Class.findById(res.query.id, (err, doc) => {
        console.log(doc);
    })
})

router.put('/edit', function(req, res) {
    var id = req.body.id;
    console.log(req.body)
    Class.update(req.body.id, function(err, doc) {
        console.log(doc)
        res.send(
            (err === null) ? {
                msg: ''
            } : {
                msg: err
            }
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

router.get('/classes', (req, res, next) => {
    Class.find({}).populate('lectures').exec(function(err, doc) {
        // console.log(doc)
        res.json(doc)
        // console.log(doc.populated('author')) // '5144cf8050f071d979c118a7'
    })
})

module.exports = router;