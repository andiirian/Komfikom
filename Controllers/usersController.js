var modelKaryaTulis = require('../Models/modelKaryaTulis')

var postKaryaTulis = (req, res, next) =>{
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
        date    : hari + '-' + months[bulan] + '-' + tahun
    }

    var insert = new modelKaryaTulis(data)

    insert.save((err) =>{
        res.send('berhasil')
    })
}
var postEditKaryaTulis = (req, res, next) =>{
    modelKaryaTulis.findByIdAndUpdate('5bea8cd54ee8871303e2352f', {
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
        res.send(result);
    })
}
var controller = {
    postKaryaTulis      : postKaryaTulis,
    postEditKaryaTulis  : postEditKaryaTulis,
    getKaryaTulis       : getKaryaTulis
}

module.exports = controller