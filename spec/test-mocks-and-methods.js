function clearDoubles() {
  notelistmock.notes = [];
  notelistmock.texts = [];
};

var notemock = {
  text: "Favourite Drink: Seltzer, after the salsa"
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

var notelistviewmock;