var quixote = require("../node_modules/quixote/dist/quixote.js");
var expect = require('../node_modules/expect.js');

// based on the example in the quixote docs
describe("News page", function() {

  var frame;        // Quixote test frame
  var firstPost;         

  // Create the test frame once for all your tests.
  // Here we load mypage.html. You can also create elements programmatically.
  before(function(done) {
    var options = { src: "/base/html/news.html" };
    frame = quixote.createFrame(options, done);
  });

  // Destroy the test frame after your tests are done.
  after(function() {
    frame.remove();
  });

  // Reset the test frame before (or after) each test. This is
  // faster than re-creating the frame for every test.
  beforeEach(function() {
    frame.reset();

    // Get the elements we want to test
    firstPost = frame.get("#lorem-ipsum");       // you can use any CSS selector
    
  });

  // Here's our test.
  it("has posts with text size smaller than their headers", function() {
     var postTextSize = frame.get("#lorem-ipsum p.lead").getRawStyle("font-size");
     var headerTextSize = frame.get("#lorem-ipsum h3").getRawStyle("font-size");  

    // Use your preferred assertion library (such as Chai) to make assertions.
    expect(headerTextSize).to.be.greaterThan(postTextSize);
  });


});