// If string has more than one neighboring dashes(e.g. --) replace they with one dash(-).

// Dashes are considered neighbors even if there is some whitespace between them.

// Example
// For str = "we-are- - - code----warriors.-"

// The result should be "we-are- code-warriors.-"

// Input/Output
// [input] string str

// [output] a string
function replaceDashesAsOne(str) {
    return str.replace(/-[- ]*-/g, '-')
  }

  // https://www.codewars.com/kata/reviews/58afa7ae1a90e337ae00088b/groups/58afa7ae1a90e337ae00088d