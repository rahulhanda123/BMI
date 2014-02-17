exports.index = function(req, res){
    res.render('index/index.jade');
}

exports.indexAdd = function(req, res){
    res.redirect('/oneone');
}

