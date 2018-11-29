var modelSejarah = require('../Models/modelSejarah');
var multer       = require('multer')
var path         = require('path')
var modelBerita  = require('../Models/modelBerita')
var passwordHash = require('password-hash')
var modelUsers   = require('../Models/modelUsers')
var modelGallery = require('../Models/modelGallery')


var getSejarah = (req, res, next) =>{
    
}

var getFormBerita = (req, res, next) =>{
    res.render('admin/formBerita')
}

var getEditBerita = (req, res, next) =>{
    modelBerita.findById(req.params.id).exec((err, result) =>{
        res.render('admin/formEditBerita', {result: result});
    })
}


var postSejarah = (req, res, next) =>{
    const storage = multer.diskStorage({
        destination : path.join(__dirname + './../public/images/sejarah/'),
        filename: function(req, file, cb){
            cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
        }
    });

    const upload = multer({
        storage : storage
    }).single('foto-sejarah');

   var run =  async () =>{
    await upload(req, res, err => {
        if (err) throw err
        var data = {
            title   : req.body.title,
            content : req.body.content,
            foto    : '/images/sejarah/' + req.file.filename
        }
        var insert = new modelSejarah(data)

        insert.save().then((err) =>{
            if(err){ return false}
            return true
        })
     });
   }
   if (run()) {
       res.send('berhasil')
   }else res.send('gagal')

      
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
            name    : "Admin",
            userid  : '5bea88db763e24117222bee1',
            title   : req.body.title,
            content : req.body.content,
            foto    : '/images/berita/' + req.file.filename,
            date    : hari + '-' + months[bulan] + '-' + tahun,
            status  : 1,
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
    res.redirect('/admin/Form-Berita')
  }
    else res.send('gagal')
}

var postDaftar = (req, res, next) =>{
    var data = {
        nama        : req.body.nama,
        username    : req.body.username,
        password    : passwordHash.generate(req.body.password),
        admin       : req.body.admin
    }
    var insert = new modelUsers(data)

    insert.save().then(() =>{
        res.send('berhasil')
    })
}

var postEditSejarah = (req, res, next) =>{
    modelSejarah.findByIdAndUpdate(req.params.id, {
        title   : req.body.title,
        content : req.body.content
    }, (err) =>{
        if(err) throw err
        res.send('berhasil')
    })
}

var postEditBerita = (req, res, next) =>{
    modelBerita.findByIdAndUpdate(req.params.id, {
        title   : req.body.title,
        content : req.body.content

    },(err) =>{
        if(err) throw err
        res.redirect('/admin')
    })
}

var getSejarah = (req, res, next) =>{
    modelSejarah.find().exec((err, result) =>{
        res.render('admin/tableSejarah', {result: result})
    })
}
var getBerita = (req, res, next) =>{
    modelBerita.find().exec((err, result) =>{
        res.render('admin/tableBerita',{result: result})
    })
}
var postGallery = (req, res, next) =>{
    const storage = multer.diskStorage({
        destination : path.join(__dirname + './../public/images/gallery/'),
        filename: function(req, file, cb){
            cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
        }
    });

    const upload = multer({
        storage : storage
    }).single('foto-gallery');
    
   var run =  async () =>{
    await upload(req, res, err => {
        if (err) throw err
        
        var data = {
            foto    : '/images/gallery/' + req.file.filename

        }
        var insert = new modelGallery(data)

        insert.save().then((err) =>{
            if(err){ return false}
            return true
        })
     });
   }
  if (run()) 
  {
    res.send('berhasil')
  }
    else res.send('gagal')
}

var getFormSejarah = (req, res, next) =>{
    res.render('admin/formSejarah')
}
var getEditSejarah = (req, res, next) =>{
    modelSejarah.findById(req.params.id).exec((err, result) =>{
        res.render('admin/formEditSejarah', {result: result})
    })
}
var getHapusSejarah = (req, res, next) =>{
    modelSejarah.findByIdAndRemove(req.params.id, (err) =>{
        if(err) throw err

        res.redirect('/admin/Table-Sejarah')
    })
}

var getHapusBerita = (req, res, next) =>{
    modelBerita.findByIdAndRemove(req.params.id, (err) =>{
        if(err) throw err

        res.redirect('/admin/Table-Berita')
    })
}

var getlihatBerita = (req, res, next) =>{
    modelBerita.findById(req.params.id).exec((err, result) =>{
        res.render('admin/lihatBerita', {result:result})
    })
}

var postEditStatusBerita = (req, res, next) =>{
    modelBerita.findByIdAndUpdate(req.params.id, {$set: {
        content: req.body.content,
        status : req.body.btn 
        }
    }, (err) =>{
        if(err) throw err

        res.redirect('/admin/Table-Berita')
    })
}


var Controllers = {
    postSejarah     : postSejarah,
    postBerita      : postBerita,
    postDaftar      : postDaftar,
    postEditSejarah : postEditSejarah,
    postEditBerita  : postEditBerita,
    getSejarah      : getSejarah,
    getBerita       : getBerita,
    postGallery     : postGallery,
    getFormBerita   : getFormBerita,
    getEditBerita   : getEditBerita,
    getFormSejarah  : getFormSejarah,
    getEditSejarah  : getEditSejarah,
    getHapusSejarah : getHapusSejarah,
    getHapusBerita  : getHapusBerita,
    getlihatBerita  : getlihatBerita,
    postEditStatusBerita : postEditStatusBerita
    
}

module.exports = Controllers