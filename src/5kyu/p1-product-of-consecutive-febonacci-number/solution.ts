// Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):

// if F(n) * F(n+1) = prod:
// (F(n), F(n+1), true)
// If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
// (F(n), F(n+1), false)
// where F(n) is the smallest one such as F(n) * F(n+1) > prod.
// Examples:
// 714 ---> (21, 34, true)
// --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// 800 --->  (34, 55, false)
// --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

function fab(n: number){
    let a:number = 1; 
    let b:number = 1;
    let temp:number = 0;
    for(let i:number = 0; i<n; i++){
      temp = a; 
      a = b; 
      b = temp + b; 
    }
    
    return a;
  }
  
  export const productFib = (prod:number): [number,number,boolean] => {
    
    let current: number = 0; 
    let x:number = 0; 
    let fab1:number = 0;
    let fab2:number = 0; 
    
    while(current < prod){
      x += 1; 
      fab1 = fab(x); 
      fab2 = fab(x + 1); 
      
      current = fab1 * fab2;
    }
    if(current == prod){
      return [fab1, fab2, true]
    }
    return [fab1,fab2,false]
  }
  // proposed solution
  // https://www.codewars.com/kata/reviews/5888d1486f694ec6df001c85/groups/6729e6ba85d5f67cd3c03b55
  