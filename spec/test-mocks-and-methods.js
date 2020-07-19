function clearDoubles() {
  notelistmock.notes = [];
  notelistmock.texts = [];
  notelistmock.previews = []
};

var notemock = {
  text: "Favourite Drink: Seltzer, after the salsa"
};

var notelistmock = {
  notes: [],
  texts: [],
  previews: [],
  createNote : function(text) {
    var note = {
      text: text
    }
    this.notes.push(note);
  }
};

var notelistviewmock;