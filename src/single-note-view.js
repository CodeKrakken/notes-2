(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.getHTML = function() {
    return '<div align="center">' + this.note.text + '</div>';
  }

  exports.SingleNoteView = SingleNoteView;
})(this);