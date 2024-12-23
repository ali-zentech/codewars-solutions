// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0
function sumEvenNumbers(input) {
    return input.reduce((sum, n) => n%2==0?sum+n:sum,0)
  }
  //https://www.codewars.com/kata/reviews/586bee04a71be168cf0015a3/groups/6733371798e3524020678969