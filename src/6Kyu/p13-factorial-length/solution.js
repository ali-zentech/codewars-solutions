// In this Kata, you will implement a function count that takes an integer and returns the number of digits in factorial(n).

// For example, count(5) = 3, because 5! = 120, and 120 has 3 digits.

// More examples in the test cases.

// Brute force is not possible. A little research will go a long way, as this is a well known series.

// Good luck!

// Please also try:
function count(n) {
    let logs = 0;
      for(let i=1; i<=n;i++) {
        logs +=  Math.log10(i)
      }
    return Math.ceil(logs);
  };

  // proposed solution
  // https://www.codewars.com/kata/reviews/59f356f4b34bf9d696002ac2/groups/672ddfce9c0da96bae9fd224