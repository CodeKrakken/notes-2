(function() {
  function testNoteListCreatesANote() {
    var notelist = new NoteList(Note);
    notelist.createNote("Favourite drink: seltzer, after the salsa.")
    assert.isTrue(notelist.notes[0].text === "Favourite drink: seltzer, after the salsa.")
  }

  testNoteListCreatesANote();
})(this);

(function() {
  function testNotesArrayCanBeRetrieved() {
    var notelist = new NoteList(Note);
    notelist.createNote("One");
    notelist.createNote("Two");
    assert.isTrue(notelist.retrieve() === "One, Two");
  }

  testNotesArrayCanBeRetrieved();
})(this);