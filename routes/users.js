var express = require('express');
var router = express.Router();
var userController = require('../Controllers/usersController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/karya-tulis', userController.getKaryaTulis)
router.post('/menulis', userController.postKaryaTulis)
router.post('/edit-karyaTulis', userController.postEditKaryaTulis)
module.exports = router;
