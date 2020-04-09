(function() {
  function testNoteControllerCanBeInstantiated() {
    var noteController = new NoteController(notelistmock, NoteListView);
    assert.isTrue(noteController instanceof NoteController);
  }

  testNoteControllerCanBeInstantiated();
})(this);

clearDoubles();

(function() {
  function testNoteControllerStoresNoteListModel() {
    var noteController = new NoteController(notelistmock, NoteListView);
    assert.isTrue(noteController.notelist);
  }

  testNoteControllerStoresNoteListModel();
})(this);

clearDoubles();

(function() {
  function testNoteControllerCanAddANote() {
    var noteController = new NoteController(notelistmock, NoteListView);
    noteController.notelist.createNote("Favourite drink: seltzer, after the salsa");
    assert.isTrue(noteController.notelist.notes[0].text === "Favourite drink: seltzer, after the salsa");
  }

  testNoteControllerCanAddANote();
})(this);

clearDoubles();

(function() {
  function testNoteControllerCreatesANoteListView() {
    var noteController = new NoteController(notelistmock, NoteListView);
    assert.isTrue(noteController.notelistview instanceof NoteListView);
  }

  testNoteControllerCreatesANoteListView();
})(this);

clearDoubles();

(function() {
  function testNoteControllerNoteListViewStoresNoteList() {
    var noteController = new NoteController(notelistmock, NoteListView);
    assert.isTrue(noteController.notelistview.notelist);
  }

  testNoteControllerNoteListViewStoresNoteList();
})(this);

clearDoubles();

(function() {
  function testNoteListControllerGetsHTMLFromNoteListView() {
    var noteController = new NoteController(notelistmock, NoteListView);
    noteController.notelist.createNote("Favourite drink: seltzer, after the salsa");
    noteController.getHTML();
    assert.isTrue(noteController.content === '<div align="center"><ul><li>Favourite drink: seltzer, after the salsa</li></ul></div>');
  }

  testNoteListControllerGetsHTMLFromNoteListView();
})(this);

clearDoubles();

(function() {
  function testNoteControllerPutsHTMLIntoAppElement() {
    var notelist = new NoteList;
    var noteController = new NoteController(notelist, NoteListView);
    noteController.notelist.createNote("Favourite drink: seltzer, after the salsa");
    assert.isTrue(document.getElementById("app").innerHTML === '<div align="center"><ul><li>Favourite drink: seltzer, after the salsa</li></ul></div>');
  }

  testNoteControllerPutsHTMLIntoAppElement();
})(this);