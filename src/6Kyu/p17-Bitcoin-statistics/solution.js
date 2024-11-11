
// Your friend Phil came up with a great new Bitcoin investment strategy, but before he can start making millions, he needs to know the minimum, average and maximum exchange rate for certain periods in the last few months.

// He'll pay you 0.5 Bitcoin for a function that takes several arrays (one for each period) and calculates the minimum, average and maximum for each array, as well as the total minimum, average and maximum. Some numbers at the start and end of each period don't agree with Phil's theory, so he wants you to discard them.

// For example, for the input

// discard = 2
// array 0 = 800,1200,2100,4100,1300,700 // discard 800,1200 at start and 1300,700 at end
// array 1 = 1000,1500,4500,5000,5800,2000,1500 // discard 1000,1500 at start and 2000,1500 at end
// your function should return

// array 0 = 2100,3100,4100 // min, avg, max for input array 0 (without discarded values)
// array 1 = 4500,5100,5800 // min, avg, max for input array 1 (without discarded values)
// array 2 = 2100,4300,5800 // total min, avg, max (without discarded values)
// Good luck!
function getAvg(arr){
    return arr.reduce((sum, currentValue) => sum + currentValue, 0) / arr.length;
  }
  
  function getFinalMinMAxAvg(array){
    let out = []; 
    let length = 0; 
    let total = 0;
    array.forEach((arr, index) => {
      length += arr.length; 
      arr.forEach(n => {
        if(!out[0]){
          out[0] = n; 
          out[2] = n
        } 
        if(n<out[0]){
          out[0] = n
        }
        if(n>out[2]){
          out[2] = n
        }
        total += n;
      })
    })
    
    out[1] = total/length
    return out; 
  }
  function getMinAvgMax(toDiscard, data) {
    console.log(data)
    let dis_arr= []; 
    let out_arr = [];
    
    data.forEach((arr, index) => {
      dis_arr[index] = data[index].slice(toDiscard, -toDiscard);
      let temp_arr = [ Math.min(...dis_arr[index]),  getAvg(dis_arr[index]),  Math.max(...dis_arr[index])]
      out_arr[index] = temp_arr
    })
    out_arr[out_arr.length] = getFinalMinMAxAvg(dis_arr)
    console.log(out_arr)
    return out_arr;
  }
// proposed solution
// https://www.codewars.com/kata/reviews/6730be0acd60782c3a60b163/groups/6731d76a878704a5645f3e6e