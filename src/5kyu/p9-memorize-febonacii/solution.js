// // basic approach make dictionary
// Problem Context
// The Fibonacci sequence is traditionally used to explain tree recursion.

// function fibonacci(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

// This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

// For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.
function fibonacci(n) {
    let dict = {}
    function sub(n){
      if(n < 2) return n;
      if( n in dict ) return dict[n];
      return dict[n] = sub(n-1) + sub(n-2)
    }
    return sub(n)
  }

  // proposed solution
  // https://www.codewars.com/kata/reviews/529adbf7533b761c560004e8/groups/672b458d85d5f67cd3c06320