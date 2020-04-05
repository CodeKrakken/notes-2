var assert = {
  isTrue: function(assertion) {
    if (assertion) {
      console.log("Truth.");
    } else {
      throw new Error("Fake news.");
    }
  }
};