// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 2"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!
function expandedForm(num) {
    let mod = 10; 
    let out = []
    while(num>1){
      let rem = num%mod;
      if(rem>0){
        out.unshift(rem)
      }
      num -= rem;
      mod= mod*10
    }
    return out.join(' + ')
  }
  // https://www.codewars.com/kata/reviews/584647291c5693d6430002b6/groups/67347259c23b0c510fe21d50