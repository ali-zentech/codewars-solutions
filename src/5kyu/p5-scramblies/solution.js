// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
function scramble(str1, str2) {
    let map = {}
    for(let i = 0; i< str1.length; i++){
      if(!map[str1[i]]){
        map[str1[i]] = 1;
      } else {
        map[str1[i]] += 1;
      }
    }
    for(let i = 0; i< str2.length; i++){
      if(!map[str2[i]]) return false
      map[str2[i]] -= 1;
      if(map[str2[i]] < 0) return false
    }
    
    return true;
  }
  // proposed solution
  // https://www.codewars.com/kata/reviews/55c04c11aa1e89cf9f000185/groups/672a2a0369176734d679641c
  