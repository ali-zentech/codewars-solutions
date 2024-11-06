// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
 let out = "";
  let n = 0;
 for(let i = 0; i < list.length; i++){
   let curr = list[i]; 
   let next = list[i+1];
   n = 0;
   while ((curr + 1) == next){
     n++; 
     curr = next;
     next = list[i + n + 1];
   }
   if(n >= 2){
     out += list[i] + "-" + list[i+n];
     out += ","
     
   } if (n < 2 ){
     for (let j = 0; j<=n; j++){
       out += list[i+j];
       out += ","
     }
   }
   i += n
 }
 
   return out.trimEnd().slice(0, -1)
}

// proposed solution
// https://www.codewars.com/kata/reviews/51ba7e87b08c1cd60f00004a/groups/672b3e186f93f012e98e1e40