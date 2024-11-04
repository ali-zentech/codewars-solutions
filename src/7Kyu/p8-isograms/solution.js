// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){

    str = str.toLowerCase();
    let map = {}
    for(let i =0 ; i <= str.length; i++) {
      if(!map[str[i]]) {
        map[str[i]] = 1;
      } else{
       return false; 
      }
    }
    return true; 
  }

// proposed Solution
// https://www.codewars.com/kata/reviews/54cd002407ba21e38f00000f/groups/6728cb2bb32d09713c2e8b96