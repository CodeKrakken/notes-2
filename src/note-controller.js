(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
  }

  exports.NoteController = NoteController;
})(this);