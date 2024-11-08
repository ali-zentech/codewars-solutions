// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */
function isPrime(num) {
    // 0 and 1 are prime
    if(num<2){
      return false;
    } 
    // even number except 2 are not prime
    if(num % 2 == 0 && num > 2) {
      return false;
    }
    //loop upto sqrt for better effeciency
    let toLoop = Math.sqrt(num);
    for(let i = 3; i<= toLoop ; i+=2){
      if(num%i == 0) {
        return false;
      }
    }
    return true; 
  }

// proposed solution
// https://www.codewars.com/kata/reviews/5262119038c0985a5b0002a2/groups/6728d9346fd3e8ed37c40fde
