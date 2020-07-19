function clearDoubles() {
  notelistmock.notes = [];
  notelistmock.texts = [];
};

var notelistmock = {
  notes: [],
  texts: [],
  createNote : function(text) {
    var note = {
      text: text
    }
    this.notes.push(note);
  }
};