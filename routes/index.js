
// Mongo db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webmail');

var Inbox =  require('./models.js').Inbox;
var Archive =  require('./models.js').Archive;
var Sent =  require('./models.js').Sent;
var Spam =  require('./models.js').Spam;




exports.inbox = function(req, res){
    Inbox.find({}, function (err, docs) {
        if(err) throw err;
        res.send(docs);
    });
};

exports.archive = function(req, res){
    Archive.find({}, function (err, docs) {
        if(err) throw err;
        res.send(docs);
    });
};

exports.sent = function(req, res){
    Sent.find({}, function (err, docs) {
        if(err) throw err;
        res.send(docs);
    });
};

exports.spam = function(req, res){
    Spam.find({}, function (err, docs) {
        if(err) throw err;
        res.send(docs);
    });
};

