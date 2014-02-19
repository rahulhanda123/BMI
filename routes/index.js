exports.index = function(req, res){
    res.render('index/index.jade', {title: 'Home Page'});
}

exports.indexAdd = function(req, res){
    res.redirect('/oneone');
}

