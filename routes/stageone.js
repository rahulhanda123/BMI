exports.oneone = function(req, res){
    res.render('stageone/oneone.jade', {title: 'Stage 1 - 1 of 1'});
}

exports.oneoneAdd = function(req, res){
    //Add here into the database
    res.redirect('/twoone');
}
