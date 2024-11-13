// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

function reverse(arr) {
    let temp; 
     for(let i = 0; i<arr.length/2; i++){
       temp = arr[arr.length-i-1];
       arr[arr.length - i - 1] = arr[i] 
       arr[i] = temp
     }
    
  }

  // https://www.codewars.com/kata/reviews/55dea58a09d2fc91300000ad/groups/61817c23905bc3000159dba6