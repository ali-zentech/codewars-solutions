
decodeMorse = function(morseCode){
  
    let str = morseCode.trim().split("   ");
    let res = "";
    str.forEach(word => {
      word.split(" ").forEach(chr => {
        res += MORSE_CODE[chr];
      })
      res += " "
    })
    
    return res.trim()
    // You can use MORSE_CODE[morse]
  }
  // proposed solution
  // https://www.codewars.com/kata/reviews/54be2a15518b8dcff90001f2/groups/672a22ae85d5f67cd3c0430f

