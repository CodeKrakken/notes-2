(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
  }

  NoteController.prototype.getHTML = function() {
    this.content = this.notelistview.returnHTML();
    window.onload = function() {
      document.getElementById("app").innerHTML = this.content;
      return this.content;
    }

  }

  exports.NoteController = NoteController;
})(this);