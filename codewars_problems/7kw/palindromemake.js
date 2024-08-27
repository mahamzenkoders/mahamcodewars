// Write a function makePalindrome that takes a string as the argument and then returns the palindrome made from that string without modifying the original string.

// For example:

// makePalindrome('a') --> 'a'
// makePalindrome('ab') --> 'ba'
// makePalindrome('abc') --> 'cba'
// makePalindrome('race') --> 'ecar'

function makePalindrome(text){
    let finalstring=text.split("").reverse().join(" ")
    return finalstring
  }
  
  console.log(makePalindrome('abc'))