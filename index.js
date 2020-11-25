// Export phrase
module.exports = Phrase;

//Adds `reverse` to all strings
string.prototype.reverse =  function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;
}

// Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

//returns true for a palindrome, false otherwise.
function palindrome(string) {
  return this.processedContent() === this.processedContent().reverse();
}