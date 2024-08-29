// Instructions
// Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

// If there is no number that is less than or equal to the target number then return undefined.

// The array of integers may be empty, but will always be an array.



function priceIsRight(numbers, target) {

    let sortedArray=numbers.sort((a,b)=>a-b)
    let max=sortedArray[sortedArray.length-1]
    for(let i=0;i<sortedArray.length;i++)
    {
      if(sortedArray[i]==target||sortedArray[i]<target&&sortedArray[i+1]>target)
      {
          return sortedArray[i]
      }

  }
  return undefined;
}
  
   console.log(priceIsRight([1,3,5,8], 7));