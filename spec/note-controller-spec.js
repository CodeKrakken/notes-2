(function() {
  function testNoteControllerCanBeInstantiated() {
    var notelist = new NoteList;
    var noteController = new NoteController(notelist);
    assert.isTrue(noteController instanceof NoteController);
  }

  testNoteControllerCanBeInstantiated();
})(this);

(function() {
  function testNoteControllerStoresNoteListModel() {
    var notelist = new NoteList;
    var noteController = new NoteController(notelist);
    assert.isTrue(noteController.notelist instanceof NoteList);
  }

  testNoteControllerStoresNoteListModel();
})(this);

(function() {
  function testNoteControllerCanAddANote() {
    var notelist = new NoteList;
    var noteController = new NoteController(notelist);
    noteController.notelist.createNote("Favourite drink: seltzer, after the salsa");
    assert.isTrue(noteController.notelist.notes[0].text === "Favourite drink: seltzer, after the salsa");
  }

  testNoteControllerCanAddANote();
})(this);