(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.notelist.createNote("Favourite drink: seltzer, after the salsa");
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.howdify = function() {
    var element = document.getElementById("app");
    element.innerHTML = "Howdy";
  }

  NoteController.prototype.displayNotes = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.notelistview.returnHTML();
  }

  exports.NoteController = NoteController;
  })(this);
