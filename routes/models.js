var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

// document
var Email = new Schema({
    from            : String
  , to              : String
  , subject         : String
  , messageContent  : String
  , folder          : String
});



exports.Inbox = mongoose.model('inbox_email', Email);
exports.Archive = mongoose.model('archive_email', Email);
exports.Sent = mongoose.model('sent_email', Email);
exports.Spam = mongoose.model('spam_email', Email);

