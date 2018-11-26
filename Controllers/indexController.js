var modelSejarah = require('../Models/modelSejarah')
var modelBerita  = require('../Models/modelBerita')
var modelGallery = require('../Models/modelGallery')

var getIndex = (req, res, next) =>{
    var sejarah = modelSejarah.find();
    var berita  = modelBerita.find()

    var run = async () =>{
        var sejarahh = await sejarah
        var beritaa  = await berita

        var data = {
            sejarah : sejarahh,
            berita  : beritaa 
        }

        return data
    }

    run()
    .then((result)=>{
        res.render('index/index', {index : result})
    })
}

var getBeritaSingle = (req, res, next) =>{
    modelBerita.findById(req.params.id).exec((err, result) =>{
        res.render('index/berita-single', {result : result})
    })

    

}

var getGallery = (req, res, next) =>{
    modelGallery
        .find()
            .exec((err, result) =>{
                res.render('index/gallery')
            })
}

var getBerita = (req, res, next) =>{
    modelBerita.find().exec((err, result) =>{
        res.render('index/berita', {result : result})
    })
    
}

var postComment = (req, res, next) =>{
    var data = {
        nama    : req.body.nama,
        email   : req.body.email,
        comment : req.body.comment   
    }

    var run = async () =>{
        await modelBerita.findByIdAndUpdate(req.params.id, {$push: 
            {
                comment : data
            }
        })
    }
    run()
        .then(() =>{
            res.redirect('/berita/'+req.params.id)
        })
}

var Controller = {
    getIndex          : getIndex,
    getBeritaSingle   : getBeritaSingle,
    getGallery        : getGallery,
    getBeritaa        : getBerita,
    postComment       : postComment
}

module.exports = Controller