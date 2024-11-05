// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    return arr.filter( n => { return (arr.indexOf(n) == arr.lastIndexOf(n))})[0]
  }

  // proposed solution
   // https://www.codewars.com/kata/reviews/585d85846aa5e61d580004cd/groups/672a00871775a5b274e7f498