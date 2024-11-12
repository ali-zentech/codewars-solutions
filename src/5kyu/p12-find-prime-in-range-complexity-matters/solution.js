// Find all primes between 1 and n
// Return array of primes.
// Yep.. that's all.

// Warning: test requires you to generate all primes between 1 and 20 million without timing out.
function isPrime(num) {
    
    if(num<2){
      return false;
    } 
    
    if(num % 2 == 0 && num > 2) {
      return false;
    }
    
    let toLoop = Math.sqrt(num);
    for(let i = 3; i<= toLoop ; i+=2){
      if(num%i == 0) {
        return false;
      }
    }
    return true; 
  }
var primeList = function (top) { 
  let arr = []
  for(let i = 1; i<=top; i++){
    if(isPrime(i)){
      arr.push(i)
    }
  }
  return arr;
}
// https://www.codewars.com/kata/reviews/5927db27f6e83f7f9c0000a1/groups/67335b65e4a0895c1ed7d9bd