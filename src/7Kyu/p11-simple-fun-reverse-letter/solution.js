// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string
function reverseLetter(str) {
    return str.split('').reverse().join('').replaceAll(/[^a-zA-Z]/g,'');
  }
  //https://www.codewars.com/kata/reviews/58b8cc035400da232c000687/groups/65bfa234d337f80001676d67