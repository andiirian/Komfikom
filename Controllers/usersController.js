var modelKaryaTulis = require('../Models/modelKaryaTulis')
var multer       = require('multer')
var path         = require('path')
var modelBerita  = require('../Models/modelBerita')
var postKaryaTulis = (req, res, next) =>{
    const storage = multer.diskStorage({
        destination : path.join(__dirname + './../public/images/karya/'),
        filename: function(req, file, cb){
            cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
        }
    });

    const upload = multer({
        storage : storage
    }).single('foto-karya');

   var run =  async () =>{
    await upload(req, res, err => {
        if (err) throw err
        
        var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        var date  = new Date()
        var hari  = date.getDate()
        var bulan = date.getMonth()
        var tahun = date.getFullYear() 
    var data = {
        userid : '5bea88db763e24117222bee1',
        title   : req.body.title,
        content : req.body.content,
        penulis : req.body.penulis,
        foto    : '/images/karya/' + req.file.filename,
        date    : hari + '-' + months[bulan] + '-' + tahun
    }

    var insert = new modelKaryaTulis(data)

    insert.save((err) =>{
        if(err) return true
        return false
    })
     });
   }
  if (run()) 
  {
    res.send('berhasil')
  }
    else res.send('gagal')

 
}
var postEditKaryaTulis = (req, res, next) =>{
    modelKaryaTulis.findByIdAndUpdate(req.params.id, {
        title   : req.body.title,
        content : req.body.content,
        penulis : req.body.penulis,
    },(err) =>{
        if(err) throw err

        res.send('berhasil')
    })
}
var getKaryaTulis = (req, res, next) =>{
    modelKaryaTulis.find({
        userid : '5bea88db763e24117222bee1'
    }).exec((err, result) =>{
        res.render('users/tableKaryaTulis', {result: result});
    })
}
var getFormKaryaTulis = (req, res, next) =>{
    res.render('users/formKaryaTulis')
}
var getEditKaryaTulis = (req, res, next) =>{
    modelKaryaTulis.findById(req.params.id).exec((err, result) =>{
        res.render('users/formEditKaryaTulis',{result: result})
    })
}
var getHapusKaryaTulis = (req, res, next) =>{
    modelKaryaTulis.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err

        res.redirect('/users/Table-karyaTulis')
    })
}
var getFormBerita = (req, res, next) =>{
    res.render('users/formBerita')
}
var postBerita = (req, res, next) =>{
    const storage = multer.diskStorage({
        destination : path.join(__dirname + './../public/images/berita/'),
        filename: function(req, file, cb){
            cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
        }
    });

    const upload = multer({
        storage : storage
    }).single('foto-berita');

   var run =  async () =>{
    await upload(req, res, err => {
        if (err) throw err
        var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        var date  = new Date()
        var hari  = date.getDate()
        var bulan = date.getMonth()
        var tahun = date.getFullYear() 
        var data = {
            name    : req.body.nama,
            userid  : '5c0030a75089291b5e08817e',
            title   : req.body.title,
            content : req.body.content,
            foto    : '/images/berita/' + req.file.filename,
            date    : hari + '-' + months[bulan] + '-' + tahun,
            status  : 0,
            comment : []

        }
        var insert = new modelBerita(data)

        insert.save().then((err) =>{
            if(err){ return false}
            return true
        })
     });
   }
  if (run()) 
  {
    res.redirect('/users/Form-Berita')
  }
    else res.send('gagal')
}

var getBerita = (req, res, next) =>{
    modelBerita.find({userid: '5c0030a75089291b5e08817e'}).exec((err, result) =>{
        res.render('users/tableBerita',{result: result})
    })
}

var controller = {
    postKaryaTulis      : postKaryaTulis,
    postEditKaryaTulis  : postEditKaryaTulis,
    getKaryaTulis       : getKaryaTulis,
    getFormKaryaTulis   : getFormKaryaTulis,
    getEditKaryaTulis   : getEditKaryaTulis,
    getHapusKaryaTulis  : getHapusKaryaTulis,
    getFormBerita       : getFormBerita,
    postBerita          : postBerita,
    getBerita           : getBerita

}

module.exports = controller