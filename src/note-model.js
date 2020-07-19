(function(exports) {
  function Note(text) {
    this.text = text;
    this.id = 0
  };

  Note.prototype.retrieve = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);