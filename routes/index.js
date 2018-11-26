var express = require('express');
var router = express.Router();
var indexController = require('../Controllers/indexController')

/* GET home page. */
router.get('/', indexController.getIndex);
router.get('/berita/:id', indexController.getBeritaSingle)
router.get('/gallery', indexController.getGallery)
router.get('/berita', indexController.getBeritaa)
router.post('/berita/:id', indexController.postComment)

module.exports = router;
