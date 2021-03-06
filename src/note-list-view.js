(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist
  }

  NoteListView.prototype.returnHTML = function() {
    this.notelist.notes.forEach(note => this.notelist.previews.push(note.text.substr(0, 20)));
    return '<div align="center"><ul><li>' + this.notelist.previews.join('</li><li>') + '</li></ul></div>';
  }

  exports.NoteListView = NoteListView
})(this);