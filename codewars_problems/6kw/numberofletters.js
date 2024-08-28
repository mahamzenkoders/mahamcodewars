function numbersOfLetters(integer) {
  const digitToWord = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
  };

  const path = [];
  let currentString = integer.toString().split("").map(digit => digitToWord[digit]).join("");
  
  while (true) {
    path.push(currentString); 
    let lengthWord = currentString.length.toString().split("").map(digit => digitToWord[digit]).join("");
    if (lengthWord === currentString) break; 
    currentString = lengthWord;
  }

  return path;
}

console.log(numbersOfLetters(999));  
