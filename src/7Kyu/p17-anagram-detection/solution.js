// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"
var isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
    if(test.length != original.length) return false; 
    let dict={}
    for(let i=0; i<test.length; i++){
      if(!dict[test[i]]){
        dict[test[i]] = 1
      } else{
        dict[test[i]] += 1; 
      }
    }
    for (let i = 0; i < original.length; i++) {
      if (!dict[original[i]]) {
        return false; 
      }
      dict[original[i]] -= 1;
    }
  
    return Object.values(dict).every(count => count === 0);
  };
// https://www.codewars.com/kata/reviews/529eef7c9194e0cbc1000258/groups/67336b4798e352402067915d