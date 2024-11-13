// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!
function findMissingLetter(array){
    let ascii = array[0].charCodeAt(0); 
    for(let i = 1; i< array.length; i++){
      if(array[i].charCodeAt(0) != ascii+1){
        return String.fromCharCode(ascii + 1)
      }
      ascii = array[i].charCodeAt(0); 
    }
  }
  // https://www.codewars.com/kata/reviews/583a0b20cd2acc1d9900007e/groups/673474f4bc1a4a0b4c93bf5b