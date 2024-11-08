// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {

    let i = 0;
    let j = 0;
    while (j < arr.length) {
        if (arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
        j++;
    }

  return arr
}
// proposed solution
// https://www.codewars.com/kata/reviews/52597aa56021e91c93000cb3/groups/63c8a75bee2e3d00013924c8