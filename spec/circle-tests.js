(function(exports) {
  function testCircleRadiusDefaultsTo10() {
    var circle = new Circle();

    if (circle.radius === 10) {
      console.log("Huzzah!")
    } else {
      throw new Error("Circle size is not 10");
    }
  };

  testCircleRadiusDefaultsTo10();
})(this);