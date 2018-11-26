var express = require('express');
var router = express.Router();
var controllerAdmin = require('../Controllers/adminControllers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Form-Berita', controllerAdmin.getFormBerita);
router.get('/Edit-Berita/:id', controllerAdmin.getEditBerita);
router.get('/table-sejarah', controllerAdmin.getSejarah)
router.get('/table-berita', controllerAdmin.getBerita)
router.post('/sejarah', controllerAdmin.postSejarah)
router.post('/Form-Berita', controllerAdmin.postBerita)
router.post('/daftar', controllerAdmin.postDaftar)
router.post('/editSejarah', controllerAdmin.postEditSejarah)
router.post('/editBerita', controllerAdmin.postEditBerita)
router.post('/tambah-gallery', controllerAdmin.postGallery)
module.exports = router;
