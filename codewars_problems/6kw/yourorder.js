function order(words) {
  let myarray = words.split(" ");
  function Extractnum(words) {
    return parseInt(words.replace(/^\D+/g, ""), 10);
  }
  let sortedString = words
    .split(" ")
    .sort((a, b) => Extractnum(a) - Extractnum(b))
    .join(" ");
  return sortedString;
}

console.log(order("Hello1 this3 is4 me2"));
