// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4

function last(list){
    return list[list.length-1]
  }
  
  
  let array="abcde"
  
  console.log(last(array))