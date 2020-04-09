(function() {
  function testStoresANoteListModel() {
    
    var notelistmock = {
      notes : [],
      createNote : function(text) {
        this.notes.push(text);
      }
    }
    
    notelistmock.createNote("I LIVE");
    var notelistview = new NoteListView(notelistmock);
    assert.isTrue(notelistview.notelist.notes[0] === "I LIVE");
  }

  testStoresANoteListModel();
})(this);

(function() {
  function testReturnsSingleItemNoteListWithHTML() {
    var notelist = new NoteList;
    notelist.createNote("I LIVE");
    var notelistview = new NoteListView(notelist);
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