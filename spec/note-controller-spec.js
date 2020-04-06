(function() {
  function testNoteControllerCanBeInstantiated() {
    var notelist = new NoteList;
    var noteController = new NoteController(NoteList);
    assert.isTrue(noteController instanceof NoteController);
  }

  testNoteControllerCanBeInstantiated();
})(this);