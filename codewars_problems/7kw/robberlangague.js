// Introduction
// The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

// The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

// Example
// In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

// 'foo bar' => 'fofoo bobaror'


function toRobberLanguage(text) {
  const vowels = "aeiouAEIOU";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let result = "";

  for (let char of text) {
    if (consonants.includes(char)) {
      result += char + "o" + char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

console.log(toRobberLanguage("foo bar")); 
console.log(toRobberLanguage("Maham")); 
