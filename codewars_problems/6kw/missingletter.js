// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'


function findMissingLetter(chars) {
  
    let start = chars[0].charCodeAt(0);

    for (let i = 0; i < chars.length; i++) {
        let expectedCharCode = start + i;
        
        if (chars[i].charCodeAt(0) !== expectedCharCode) {
            return String.fromCharCode(expectedCharCode);
        }
    }
    
    return null;
}


console.log(findMissingLetter(['O','Q','R','S']));     
