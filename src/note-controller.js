(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
  }

  NoteController.prototype.getHTML = function() {
    this.content = this.notelistview.returnHTML();
      document.getElementById("app").innerHTML = this.content;
  }

  exports.NoteController = NoteController;
})(this);