// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.

// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

// so we could write a function that will desensitize all of the uppcase or lowercase and spaces and punctuation.
// we can then write a callback function to put inside of our first function that will check for equality when being read forwards or backwards.
var palindromeStr = "Never Odd Or Even";
// Never Odd Or Even

// var strReverse = str.split('').reverse().join('');

var acceptsAPalindromeStr = function (str) {
    // if reading the string forward and reading the string backwards is equal then return true.
    if (str.split('').reverse().join('') === str.split('').reverse().join('') {
        return true; 
    } else {
        return false;
    }
    // desensitize capital letters/spaces/capitalizations
}
console.log(acceptsAPalindromeStr(palindromeStr));

// install JSON
// install ChannelSplitterNode in terminal
// open up a test . js file to run your code in its own separate file

// in your test js file typr in:

var chai = require('chai');
var assert = chai.assert;
var pa

describe("A Palindrom finder", function() {
    it("should identify a basic palindrome", function(){
        assert.isTrue(isPalindrome("abba"));
        assert.isTrue(isPalindrome("aba"));
        assert.isTrue(isPalindrome("a"));
        assert.isFalse(isPalindrome("abc"));
        assert.isTrue(isPalindrome("star!rats..."));
        assert.isTrue(isPalindrome("star rats"));
        assert.isTrue(isPalindrome("Star rats"));
        assert.isTrue(isPalindrome("Star RatS!"));
    });
    // correctly identify palindromes
    // should work even when there are spaces, capitols, or symbols.
    it("should identify a palindrome even with spaces", function() {

    });
    it("should identify a palindrome even with spaces", function() {

    });
    it("should identify a palindrome even with capitols", function() {

    });
    it("should identify a palindrome even with symbols", function() {

    });
    it("should identify a palindrome even with symbols,capitals, and spaces", function() {
        assert.isTrue(isPalindrome("Shouldn't work"))

    });
});