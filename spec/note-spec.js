(function() {
  function testNoteStoresInitialText() {
    var note = newNote();
    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  testNoteStoresInitialText();
})(this);

(function() {
  function testTextCanBeRetrieved() {
    var note = newNote();
    assert.isTrue(note.retrieve() === "My favourite language is JavaScript");
  };

  testTextCanBeRetrieved();
})(this);