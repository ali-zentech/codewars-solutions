// // Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"
function solution(input, markers) {
    function all_markers( text) {
      return markers.map(marker => text.indexOf(marker)).filter(index => index >= 0)
    }
      return input.split("\n").map(val => val.slice(0, Math.min(...all_markers(val))).trimEnd()).join('\n')
  }
  // https://www.codewars.com/kata/reviews/51c8e7f3049befd8ca0000bd/groups/67321735e0eb5eadcafd184c