(function() {
  function testReturnsHTMLStringRepresentingNoteModel() {
    var singlenoteview = new SingleNoteView(notemock);
    assert.isTrue(singlenoteview.getHTML() === '<div align="center">Favourite Drink: Seltzer, after the salsa</div>')
  }

  testReturnsHTMLStringRepresentingNoteModel();
})(this);

clearDoubles();