// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
function alphabetPosition(text) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
      "w", "x", "y", "z"]
    let res = ""
    text = text.toLowerCase();
    let newText = text.replace(/[^A-Z0-9]/ig, "");
    
    for(let i=0; i< newText.length; i++){
      
      res += alphabet.indexOf(newText[i])+1 + " "
    }
    return res.trim();
  }

// proposed solution
// https://www.codewars.com/kata/reviews/56002d1c656fe9438f00001b/groups/6728dec5cd7f646b5e4a3643