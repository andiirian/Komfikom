var express = require('express');
var router = express.Router();
var userController = require('../Controllers/usersController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//karya Tulis
router.get('/Table-karyaTulis', userController.getKaryaTulis)
router.get('/Form-karyaTulis', userController.getFormKaryaTulis)
router.get('/Edit-karyaTulis/:id', userController.getEditKaryaTulis)
router.get('/Hapus-karyaTulis/:id', userController.getHapusKaryaTulis)
router.post('/Form-karyaTulis', userController.postKaryaTulis)
router.post('/Edit-karyaTulis/:id', userController.postEditKaryaTulis)

//rote berita
router.get('/Table-Berita', userController.getBerita)
router.get('/Form-Berita', userController.getFormBerita)
router.post('/Form-Berita', userController.postBerita)
module.exports = router;
