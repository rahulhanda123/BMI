exports.twoone = function(req, res){
    res.render('stagetwo/twoone.jade');
}

exports.twotwo = function(req, res){
    res.render('stagetwo/twotwo.jade');
}

exports.twothree = function(req, res){
    res.render('stagetwo/twothree.jade');
}





exports.twooneAdd = function(req, res){
    //Add here into the database
    res.redirect('/twotwo');
}

exports.twotwoAdd = function(req, res){
    //Add here into the database
    res.redirect('/twothree');
}

exports.twothreeAdd = function(req, res){
    //Add here into the database
    res.redirect('/fourtwo');
}