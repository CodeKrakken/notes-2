function clearDoubles() {
  notelistmock.notes = [];
  notelistmock.texts = [];
};

var notelistmock = {
  notes : [],
  texts : [],
  createNote : function(text) {
    var note = {
      text : text
    }
    this.notes.push(note);
  }
};

(function() {
  function testStoresANoteListModel() {
    notelistmock.createNote("I LIVE");
    var notelistview = new NoteListView(notelistmock);
    assert.isTrue(notelistview.notelist.notes[0].text === "I LIVE");
  }

  testStoresANoteListModel();
})(this);

clearDoubles();

(function() {
  function testReturnsSingleItemNoteListWithHTML() {
    notelistmock.createNote("Yes indeed, ladies and gentlemen");
    var notelistview = new NoteListView(notelistmock);
    assert.isTrue(notelistview.returnHTML() === '<div align="center"><ul><li>Yes indeed, ladies and gentlemen</li></ul></div>');
  }

  testReturnsSingleItemNoteListWithHTML();
})(this);

clearDoubles();

(function() {
  function testReturnsSeveralItemNoteListWithHTML() {
    notelistmock.createNote("One");
    notelistmock.createNote("Two");
    notelistmock.createNote("Several");
    var notelistview = new NoteListView(notelistmock);
    assert.isTrue(notelistview.returnHTML() === '<div align="center"><ul><li>One</li><li>Two</li><li>Several</li></ul></div>')
  }

  testReturnsSeveralItemNoteListWithHTML();
})(this);

clearDoubles();

(function() {
  function testReturnsNoItemListWithHTML() {
    notelistview = new NoteListView(notelistmock);
    assert.isTrue(notelistview.returnHTML() === '<div align="center"><ul><li></li></ul></div>')
  }

  testReturnsNoItemListWithHTML();
})(this);

clearDoubles();