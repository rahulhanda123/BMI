exports.fourtwo = function(req, res){
    res.render('stagefour/fourtwo.jade', {title: 'Stage 4 - 2 of 2'});
}

exports.fourtwoAdd = function(req, res){
    //Add here into the database
    res.redirect('/fourtwo');
}
