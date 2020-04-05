(function(exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.retrieve = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);