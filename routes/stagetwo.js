exports.twoone = function(req, res){
    res.render('stagetwo/twoone.jade', {title: 'Stage 2 - 1 of 3'});
};

exports.twotwo = function(req, res){
    res.render('stagetwo/twotwo.jade', {title: 'Stage 2 - 2 of 3'});
};

exports.twothree = function(req, res){
    res.render('stagetwo/twothree.jade', {title: 'Stage 2 - 3 of 3'});
};





exports.twooneAdd = function(req, res){
    //Add here into the database
    res.redirect('/twotwo');
};

exports.twotwoAdd = function(req, res){
    //Add here into the database
    res.redirect('/twothree');
};

exports.twothreeAdd = function(req, res){
    //Add here into the database
    res.redirect('/fourtwo');
};