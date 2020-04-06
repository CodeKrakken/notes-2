(function() {
  function testStoresANoteListModel() {
  var notelist = new NoteList;
  notelist.createNote("I LIVE");
  var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.notelist.notes[0].text === "I LIVE");
  }

  testStoresANoteListModel();
})(this);

(function() {
  function testReturnsSingleItemNoteListWithHTML() {
  var notelist = new NoteList();
  notelist.createNote("I LIVE");
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === '<div align="center"><ul><li>I LIVE</li></ul></div>');
  }

  testReturnsSingleItemNoteListWithHTML();
})(this);
