// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
  let num_split = String(num).split(""); 
  let out = ""
  
  num_split.forEach( (n) => {
    out += Math.pow(parseInt(n), 2);
  })
 
  return parseInt(parseInt(out));
}

// link to prposed solution
// https://www.codewars.com/kata/reviews/5485f83ed8325edc730001c0/groups/6728b7dcb32d09713c2e88f5