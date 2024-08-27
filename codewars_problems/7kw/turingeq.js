// You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.

// Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

// Still struggling to understand the task? Look at the following examples ;-)

// Examples
// For s = "73+42=16", the output should be true.

// 73 -> 37
// 42 -> 24
// 16 -> 61
// 37+24==61


function isTuringEquation(s) {
  const [left, right] = s.split("=");
  const [a, b] = left.split("+");
  const reverse = (str) => str.split("").reverse().join("");
  return (
    parseInt(reverse(a)) + parseInt(reverse(b)) === parseInt(reverse(right))
  );
}

console.log(isTuringEquation("73+42=16"));
