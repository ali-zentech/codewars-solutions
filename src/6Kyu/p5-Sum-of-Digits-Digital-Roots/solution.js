// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// Solution Proposed 

function digitalRoot(n) {
    if(n < 10) {
      return n; 
    }
    //split num into array of string
    let num_split = String(n).split("");
    let sum = 0;
    num_split.forEach(num => {
      sum += parseInt(num); 
    })
    
    // main recursive loop
    while(sum > 9) {
      sum = digitalRoot(sum);
    }
    return sum; 
    
  }
// Lin to the Solution
//   https://www.codewars.com/kata/reviews/541c8b5e7e4b4c61e2000149/groups/6728a9e4b32d09713c2e872b
