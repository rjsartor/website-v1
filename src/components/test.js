// You are given a dataset containing positive and negative integers.
//  Write an algorithm to find the largest sum in a continuous sequence.

const data = [2 , 5, -2, 6, -8, 14, 4, -3]
//output = 21

//interate through the array 
//maxSum variable
//Sum variable 
//sum > maxSum, set maxSum = sum

const largestSum = array => {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
  
    console.log('sum', sum)
    if (sum > maxSum) {
      console.log('sum in if block', sum)
      maxSum = sum
    }
  }
  console.log(sum)
  return maxSum
}

console.log(largestSum(data));