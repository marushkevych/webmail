
$(function($){

var viewModel = {
    // Data
    folders: ['Inbox', 'Archive', 'Sent', 'Spam'],

    selectedFolder: ko.observable('Inbox'),

    currentPageMails: ko.observableArray([]),

    selectedMailId: ko.observable(),

    // Behaviours
    selectFolder: function(name){
        this.selectedMailId(null);
        this.selectedFolder(name);
    }

};

viewModel.selectedMail = ko.dependentObservable(function() {
    var mailIdToFind = this.selectedMailId();
    return ko.utils.arrayFirst(viewModel.currentPageMails(), function(item) { return item._id == mailIdToFind });
}, viewModel);

ko.dependentObservable(function() {
    if (this.lastMailRequest) this.lastMailRequest.abort(); // Prevent concurrent requests

    // Get folder data from JSON web service and feed output into currentPageMails
    this.lastMailRequest = $.get("/mail/foldercontents/"+ this.selectedFolder(), this.currentPageMails);
}, viewModel);


window.mailViewModel = viewModel;

ko.applyBindings(viewModel);

ko.linkObservableToUrl(viewModel.selectedFolder, "folder" /* hash param name */, "Inbox" /* default value */);
ko.linkObservableToUrl(viewModel.selectedMailId, "mailId" /* hash param name */);

});




