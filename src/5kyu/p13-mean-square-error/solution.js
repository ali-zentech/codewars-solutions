// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
var solution = function(firstArray, secondArray) {
    let arr = firstArray.map((n,index)=> Math.pow(n-secondArray[index],2))
    return arr.reduce((sum,n)=>sum+n,0)/arr.length
  }
  // https://www.codewars.com/kata/reviews/51edd51599a189fe7f000018/groups/673363e4605cd90484453cf9