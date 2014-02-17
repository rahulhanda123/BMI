exports.fourtwo = function(req, res){
    res.render('stagefour/fourtwo.jade');
}

exports.fourtwoAdd = function(req, res){
    //Add here into the database
    res.redirect('/fourtwo');
}
