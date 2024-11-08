// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
function spinWords(string){
    let arr = string.split(" ");
    let out = '';
    arr.forEach(val => {
      if(val.length > 4){
        out += val.split("").reverse().join("");
      } else {
        out += val
      }
      out += " "
    })
    
    return out.trim()
  }

  // proposed solution
  // https://www.codewars.com/kata/reviews/5264d41ce218b86cb90000df/groups/672dfa199c0da96bae9fd559