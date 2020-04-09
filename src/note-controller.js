(function(exports) {
  function NoteController(notelist, notelistview) {
    this.notelist = notelist;
    this.notelistview = new notelistview(notelist);
  }

  NoteController.prototype.getHTML = function() {
    this.content = this.notelistview.returnHTML();
    document.getElementById("app").innerHTML = this.content;
  }

  exports.NoteController = NoteController;
})(this);