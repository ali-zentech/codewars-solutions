// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message){
    ordered_char =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    rep_char = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
    
    return message.replace(/[A-Z]/gi, c =>
     rep_char[ordered_char.indexOf(c) ] )
    
    
  }

  // proposed solution
  // https://www.codewars.com/kata/reviews/550be338742fda753e000a03/groups/672a0f53a1c5c7c2dfc75b9f