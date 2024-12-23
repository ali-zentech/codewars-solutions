// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    let regex = /([a-z])(?!.*\1)/g;
    return string.toLowerCase().match(regex).length ==26
  }
  // proposed solution
  // https://www.codewars.com/kata/reviews/54a5d4af37f43531e900002e/groups/672e1fff044114c19805ce7f