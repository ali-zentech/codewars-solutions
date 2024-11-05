// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let ret_str = "";
    
    let temp = str.split(" ")
      temp.forEach(n => {
        if(!['!','?','.'].includes(n)){
          ret_str += (n.substring(1,( n.length)) + n[0] + 'ay ')
        } else {
          ret_str += n
        }
        
      })
    
    return ret_str.trim()
  }

  // proposed solution
  // https://www.codewars.com/kata/reviews/520b9d2bd5c0050411000012/groups/672a055fa1c5c7c2dfc75a4a