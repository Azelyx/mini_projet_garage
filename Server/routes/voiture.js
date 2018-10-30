var express = require('express');
var router = express.Router();
var Voiture = require('../models/Voiture');

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        Voiture.getVoitureById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Voiture.getAllVoitures(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/garage/:id?', function(req, res, next) {
    Voiture.getVoitureByGarageId(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.post('/', function(req, res, next) {
    Voiture.addVoiture(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id', function(req, res, next) {
    Voiture.deleteVoiture(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:id', function(req, res, next) {
    Voiture.updateVoiture(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;
