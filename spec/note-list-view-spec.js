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

(function() {
  function testReturnsSingleItemNoteListWithHTML() {
    var notelistview = new NoteListView(notelistmock);
    assert.isTrue(notelistview.returnHTML() === '<div align="center"><ul><li>I LIVE</li></ul></div>');
  }

  testReturnsSingleItemNoteListWithHTML();
})(this);

(function() {
  function testReturnsSeveralItemNoteListWithHTML() {
    var notelist = new NoteList;
    notelist.createNote("One");
    notelist.createNote("Two");
    notelist.createNote("Several");
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.returnHTML() === '<div align="center"><ul><li>One</li><li>Two</li><li>Several</li></ul></div>')
  }

  testReturnsSeveralItemNoteListWithHTML();
})(this);

(function() {
  function testReturnsNoItemListWithHTML() {
    var notelist = new NoteList;
    notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.returnHTML() === '<div align="center"><ul><li></li></ul></div>')
  }

  testReturnsNoItemListWithHTML();
})(this);