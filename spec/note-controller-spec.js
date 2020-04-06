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