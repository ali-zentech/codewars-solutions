// assign your RegExp to REGEXP:
const REGEXP = new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=\\S+$)(?!.*[@#$%^?&-+=(){}\|/,.;_><]).{6,}$')
// (?=\\S+$) white space not allowed here
// (?=\\S+$) white space not allowed here
 // (?!.*[@#$%^&-+=()._;]) not allow any of these characters
 // (?=.*[A-Z]) must contains one

 // proposed solution
 // https://www.codewars.com/kata/reviews/52e1476c8147a7547a000814/groups/672b4beb85d5f67cd3c06405