var express = require('express');
var router = express.Router();
var Marque = require('../models/Marque');

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        Marque.getMarqueById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Marque.getAllMarques(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function(req, res, next) {
    Marque.addMarque(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id', function(req, res, next) {
    Marque.deleteMarque(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:id', function(req, res, next) {
    Marque.updateMarque(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;
