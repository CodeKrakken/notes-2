(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
  }

  NoteController.prototype.getHTML = function() {
    return this.notelistview.returnHTML();
  }

  exports.NoteController = NoteController;
})(this);