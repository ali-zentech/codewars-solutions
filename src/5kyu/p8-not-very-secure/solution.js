// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore
function alphanumeric(string){
    const reg = new RegExp('^[A-Za-z0-9]+$')
    if(string.length < 1) return false;
    if(string.split(" ".length ) > 1 ) return false;
    if (reg.test(string) == true) return true;
    return false;
  }
// proposed solution
// https://www.codewars.com/kata/reviews/55936c8d6c1297773500000c/groups/672b3750690dfcf113cb172e