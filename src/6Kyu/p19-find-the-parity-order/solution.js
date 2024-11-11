// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
function findOutlier(integers){
    console.log(integers)
    let isOdd = [];
    let isEven = [];
    for(let i = 0; i< integers.length; i++){
      if(integers[i]%2 == 0){
        if(isOdd.length>1){
          return integers[i];
        }
        isEven.push(integers[i])
      } else {
        if(isEven.length > 1){
          return integers[i];
        }
        isOdd.push(integers[i])
      }
    }
    return isOdd.length > 1 ? isEven[0]: isOdd[0];
  }
  // https://www.codewars.com/kata/reviews/565349bca24428f2870000a9/groups/6731f9ab9220a04a0f19c9ce