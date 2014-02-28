exports.oneone = function(req, res){
    res.render('stageone/oneone.jade', {title: 'Stage 1 - 1 of 7'});
}

exports.oneoneAdd = function(req, res){
    //Add here into the database
    res.redirect('/twoone');
}

exports.oneonepointone = function(req, res){
    res.render('stageone/oneonepointone.jade', {title: 'Stage 1 - 1 of 7,first block'});
}

exports.oneonepointoneAdd = function(req, res){
    //Add here into the database
    res.redirect('oneonepointtwo');
//res.redirect('/oneonepointtwo.jade');
}

exports.oneonepointtwo = function(req, res){
    res.render('stageone/oneonepointtwo');
}

exports.oneonepointtwoAdd = function(req, res){
    //Add here into the database
    res.redirect('oneonepointthree');
//res.redirect('/oneonepointtwo.jade');
}
exports.oneonepointthree = function(req, res){
    res.render('stageone/oneonepointthree', {title: 'Stage 1 - 1 of 7,third block'});
}

exports.oneonepointthreeAdd = function(req, res){
    //Add here into the database
    res.redirect('oneone');
//res.redirect('/oneonepointtwo.jade');
}