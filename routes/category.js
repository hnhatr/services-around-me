// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Category = require('../models/category');

// --------------------------- CATEGORY -----------------------------//

router.get('/', function(req, res) {
    res.send('api for category works!');
});

/**
 * desc:       add category
 * func:       /add
 * method:  POST
 * return:     ?
 */
router.post('/add', function(req, res, next) {

    Category.addCategory(req.body, function(err, results, fields) {
        if (err) {res.status(200).jsonp({  msg: err.message, code: err.code});}
        else {
          // res.send(results);
          res.status(200).jsonp({ code: 'SUCCESS' });

        }
    })

});

/**
   * desc:       get all categories
   * func:       /all
   * method:  GET
   * return:     array{id, name, desc, pid}
   */
router.get('/all', function(req, res, next) {

    Category.getCategories(function(err, results) {
          if (err) {res.status(200).jsonp({  msg: err.message, code: err.code });}
          else {
            // res.send(results);
            res.status(200).jsonp({ data: results, code: 'SUCCESS' });

          }
    })

});


/**
   * desc:       get categories parent
   * func:        /parent
   * method:  GET
   * return:     array{id, name}
   */
router.get('/parent', function(req, res, next) {

    Category.getCategoryParents(function(err, results) {
          if (err) {res.status(200).jsonp({  msg: err.message, code: err.code });}
          else {
            // res.send(results);
            res.status(200).jsonp({ data: results, code: 'SUCCESS' });

          }
    })

});


/**
   * desc:       get category info from category id
   * func:        /categoryid
   * method:  GET
   * return:     array{id, name}
   */
router.get('/:categoryid', function(req, res, next) {

    Category.getCategory(req.params.categoryid, function(err, results) {
          if (err) {res.status(200).jsonp({  msg: err.message, code: err.code });}
          else {
            // res.send(results);
            res.status(200).jsonp({ data: results, code: 'SUCCESS' });

          }
    })

});


/**
 * desc: search category follow {id, name, desc}
 * func: /search/:keyword
 * method: GET
 * return: array{id, name}
 */
router.get ('/search', function(req, res, next) {

    Category.searchCategory(req.query.q, function(err, results) {

    })

});



/**  end */
module.exports = router;
