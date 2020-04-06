(function(exports) {
  function NoteController() {
    this.notelist = new NoteList;
    this.notelistview = new NoteListView(this.notelist)
  }

  NoteController.prototype.howdify = function() {
    var element = document.getElementById("app");
    element.innerHTML = "Howdy";
  }

  exports.NoteController = NoteController;
  })(this);