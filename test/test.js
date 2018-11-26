// Import chai.
let chai = require('chai'),
  path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Rectangle class.
let function = require(path.join(__dirname, '..', 'script'));

describe("searchHistory", function() {

  it("check files end with pdf", function() {
    assert.equal(page.url.endsWith('.pdf'));
    assert.equal(page.url.endsWith('.PDF'));
  });

});

describe("searchDownloads", function() {

     it("check files end with pdf", function() {
       assert.equal(file.filename.endsWith('.pdf'));
       assert.equal(file.filename.endsWith('.PDF'));
     });

   });

describe("loadSettings", function() {

     it("Assert that an error will be thrown if user will tape value that is less then 0 ", function() {
       assert.equal(chrome.downloads.search = '-9');
     });

   });
