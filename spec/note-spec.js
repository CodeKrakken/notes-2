(function() {
  function testNoteStoresInitialText() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  testNoteStoresInitialText();
})(this);

(function() {
  function testTextCanBeRetrieved() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.retrieve() === "My favourite language is JavaScript");
  };

  testTextCanBeRetrieved();
})(this);