casper.test.begin( "Test dom.js", 1, function suite(test) {

  casper.start("dom/index.html", function() {
    test.assertExists("div");
  });

  casper.run(function() {
    test.done();
  });
});
