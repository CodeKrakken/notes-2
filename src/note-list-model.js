(function(exports) {
  function NoteList() {
    this.notes = [];
    this.texts = [];
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.notes.push(note);
  }

  NoteList.prototype.retrieve = function() {
    this.notes.forEach(note => this.texts.push(note.retrieve()));
    return this.texts.join(", ");
  }

  exports.NoteList = NoteList;
})(this);