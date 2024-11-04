// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
 
function order(words){
  
    if(!words){
      return ""
    }
    let arr = words.split(" ")
    let end_arr = []
    arr.forEach( word => {
     let num = word.match(/\d+/)[0];
      end_arr[num-1] = word; 
    })
    words = "";
    end_arr.forEach(i => {
      if(i) {
        words += i + " "
      }
    })
    
    return words.replace(/\s+$/, '');
  }

// proposed solution

// https://www.codewars.com/kata/reviews/55c8a1ae7effa86f9d000091/groups/6728c2a4b550c1dd578db0ce