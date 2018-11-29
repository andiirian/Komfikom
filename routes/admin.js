var express = require('express');
var router = express.Router();
var controllerAdmin = require('../Controllers/adminControllers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//route berita
router.get('/Lihat-Berita/:id',controllerAdmin.getlihatBerita)
router.post('/Lihat-Berita/:id',controllerAdmin.postEditStatusBerita)
router.get('/Form-Berita', controllerAdmin.getFormBerita);
router.get('/Edit-Berita/:id', controllerAdmin.getEditBerita);
router.get('/Table-Berita', controllerAdmin.getBerita)
router.get('/Hapus-Berita/:id', controllerAdmin.getHapusBerita)
router.post('/Edit-Berita/:id', controllerAdmin.postEditBerita)
router.post('/Form-Berita', controllerAdmin.postBerita)

//route sejarah

router.get('/Table-Sejarah', controllerAdmin.getSejarah)
router.get('/Form-Sejarah', controllerAdmin.getFormSejarah)
router.get('/Edit-Sejarah/:id', controllerAdmin.getEditSejarah)
router.get('/Hapus-Sejarah/:id', controllerAdmin.getHapusSejarah)
router.post('/Form-Sejarah', controllerAdmin.postSejarah)
router.post('/Edit-Sejarah/:id', controllerAdmin.postEditSejarah)


//route daftar
router.post('/daftar', controllerAdmin.postDaftar)

//route gallery
router.post('/tambah-gallery', controllerAdmin.postGallery)
module.exports = router;
