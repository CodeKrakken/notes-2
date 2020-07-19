function clearDoubles() {
  notelistmock.notes = [];
  notelistmock.texts = [];
};

newNote = function() {
  return new Note("My favourite language is JavaScript");
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

var notemock = {
  text: "Favourite Drink: Seltzer, after the salsa"
};