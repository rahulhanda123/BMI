exports.oneone = function(req, res){
    res.render('stageone/oneone.jade');
}

exports.oneoneAdd = function(req, res){
    //Add here into the database
    res.redirect('/twoone');
}
