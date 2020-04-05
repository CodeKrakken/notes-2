(function(exports) {
  function testCircleRadiusDefaultsTo10() {
    var circle = new Circle();

    assert.isTrue(circle.radius === 10);
  };

  testCircleRadiusDefaultsTo10();
})(this);